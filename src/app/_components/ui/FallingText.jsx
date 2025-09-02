import { useRef, useState, useEffect } from "react";
import Matter from "matter-js";

const FallingText = ({
  text = "",
  highlightWords = [],
  trigger = "auto",
  backgroundColor = "transparent",
  wireframes = false,
  gravity = 0.56,
  mouseConstraintStiffness = 0.9,
  fontSize = "2rem",
}) => {
  const containerRef = useRef(null);
  const [words, setWords] = useState([]);
  const [effectStarted, setEffectStarted] = useState(false);
  const engineRef = useRef(null);
  const renderRef = useRef(null);
  const bodiesRef = useRef([]);

  // Initialize words
  useEffect(() => {
    const wordElements = text.split(" ").map((word, index) => ({
      text: word,
      isHighlighted: highlightWords.some(hw => word.includes(hw)),
      id: index
    }));
    setWords(wordElements);
  }, [text, highlightWords]);

  // Handle trigger
  useEffect(() => {
    if (trigger === "auto") {
      setEffectStarted(true);
    }
  }, [trigger]);

  // Initialize physics
  useEffect(() => {
    if (!effectStarted || !containerRef.current) return;

    const {
      Engine,
      Render,
      World,
      Bodies,
      Runner,
      Mouse,
      MouseConstraint,
    } = Matter;

    // Cleanup previous instance
    if (engineRef.current) {
      World.clear(engineRef.current.world);
      Engine.clear(engineRef.current);
    }

    const containerRect = containerRef.current.getBoundingClientRect();
    const engine = Engine.create();
    engine.world.gravity.y = gravity;
    engineRef.current = engine;

    const render = Render.create({
      element: containerRef.current,
      engine,
      options: {
        width: containerRect.width,
        height: containerRect.height,
        background: backgroundColor,
        wireframes,
      },
    });
    renderRef.current = render;

    // Create boundaries
    const boundaryOptions = {
      isStatic: true,
      render: { fillStyle: "transparent" },
    };

    const boundaries = [
      Bodies.rectangle(containerRect.width / 2, containerRect.height + 25, containerRect.width, 50, boundaryOptions),
      Bodies.rectangle(-25, containerRect.height / 2, 50, containerRect.height, boundaryOptions),
      Bodies.rectangle(containerRect.width + 25, containerRect.height / 2, 50, containerRect.height, boundaryOptions),
      Bodies.rectangle(containerRect.width / 2, -25, containerRect.width, 50, boundaryOptions),
    ];

    // Create word bodies
    const wordBodies = words.map((word, index) => {
      const x = (index * 100) % containerRect.width;
      const y = 50;
      
      const body = Bodies.rectangle(x, y, 100, 30, {
        render: { fillStyle: "transparent" },
        restitution: 0.6,
        frictionAir: 0.01,
        friction: 0.1,
        density: 0.001,
      });

      Matter.Body.setVelocity(body, {
        x: (Math.random() - 0.5) * 2,
        y: 0,
      });

      return { body, word };
    });

    bodiesRef.current = wordBodies;

    // Add mouse control
    const mouse = Mouse.create(containerRef.current);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: mouseConstraintStiffness,
        render: { visible: false },
      },
    });
    render.mouse = mouse;

    // Add all bodies to world
    World.add(engine.world, [
      ...boundaries,
      mouseConstraint,
      ...wordBodies.map(wb => wb.body),
    ]);

    // Start the engine
    const runner = Runner.create();
    Runner.run(runner, engine);
    Render.run(render);

    // Update positions
    const updateLoop = () => {
      wordBodies.forEach(({ body, word }) => {
        const elem = document.getElementById(`word-${word.id}`);
        if (elem) {
          elem.style.position = "absolute";
          elem.style.left = `${body.position.x}px`;
          elem.style.top = `${body.position.y}px`;
          elem.style.transform = `translate(-50%, -50%) rotate(${body.angle}rad)`;
        }
      });
      requestAnimationFrame(updateLoop);
    };
    updateLoop();

    return () => {
      Render.stop(render);
      Runner.stop(runner);
      if (render.canvas && containerRef.current) {
        containerRef.current.removeChild(render.canvas);
      }
      World.clear(engine.world);
      Engine.clear(engine);
      engineRef.current = null;
      renderRef.current = null;
    };
  }, [effectStarted, gravity, wireframes, backgroundColor, mouseConstraintStiffness, words]);

  const handleTrigger = () => {
    if (!effectStarted && (trigger === "click" || trigger === "hover")) {
      setEffectStarted(true);
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative z-[1] w-full h-[300px] cursor-pointer text-center overflow-hidden"
      onClick={trigger === "click" ? handleTrigger : undefined}
      onMouseOver={trigger === "hover" ? handleTrigger : undefined}
    >
      {words.map((word) => (
        <span
          key={word.id}
          id={`word-${word.id}`}
          className={`inline-block mx-[2px] select-none ${
            word.isHighlighted ? "font-bold" : ""
          }`}
          style={{ 
            fontSize,
            color: word.isHighlighted ? 'var(--chakra-colors-earth-300)' : 'var(--chakra-colors-earth-100)'
          }}
        >
          {word.text}
        </span>
      ))}
    </div>
  );
};

export default FallingText;