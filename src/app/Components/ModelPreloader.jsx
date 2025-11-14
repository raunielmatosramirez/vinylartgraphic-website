// src/app/Components/ModelPreloader.jsx
"use client";
import { useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import AppInitializer from "./AppInitializer";
import LionComponent from "./LionComponent";

function ModelPreloader() {
  console.log("Cargando el modelo...");
  useEffect(() => {
    useGLTF.preload("/lion-web.gltf");
    <LionComponent />;
    <AppInitializer/>
  }, []);

  return null;
}

export default ModelPreloader;
