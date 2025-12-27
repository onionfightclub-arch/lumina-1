
import { GoogleGenAI, Type } from "@google/genai";
import { AIResponse } from "../types";

export const generateBrandStrategy = async (brandName: string): Promise<AIResponse> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Generate a high-end creative marketing tagline and a brief 1-sentence strategy for a brand named "${brandName}".`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            tagline: { type: Type.STRING },
            strategy: { type: Type.STRING }
          },
          required: ["tagline", "strategy"]
        }
      }
    });

    return JSON.parse(response.text || '{"tagline": "Elevating Vision.", "strategy": "Market-leading growth through design."}');
  } catch (error) {
    console.error("AI Strategy generation failed:", error);
    return {
      tagline: "Unleash the Future.",
      strategy: "Bespoke digital experiences that redefine industry standards."
    };
  }
};
