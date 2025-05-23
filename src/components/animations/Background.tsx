"use client";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
// import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
// import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
import { basicOption } from "@/components/animations/ts-particles/basic";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

export function Background() {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      const isMobile = window.innerWidth < 768;
      const fps = isMobile ? 30 : 60;
      basicOption.fpsLimit = fps;
      await loadSlim(engine);
      // await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // const particlesLoaded = async (container?: Container): Promise<void> => {
  //   console.log(container);
  // };

  const options = useMemo(() => basicOption, []);

  if (init) {
    return (
      <Particles
        id="tsparticles"
        // particlesLoaded={particlesLoaded}
        options={options}
        className={"fixed top-0 left-0 w-screen h-screen -z-10"}
      />
    );
  }

  return <></>;
}
