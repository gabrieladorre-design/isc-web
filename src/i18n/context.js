// src/i18n/context.js
// Contexto de React donde vive el idioma activo de la web.
// Se mantiene en su propio archivo para que el "hot reload" de Vite funcione bien.
import { createContext } from "react";

export const LanguageContext = createContext(null);
