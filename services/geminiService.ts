
import { GoogleGenAI, Type } from "@google/genai";
import { AIResponse } from "../types";

export const generateBrandStrategy = async (brandName: string): Promise<AIResponse> => {
  // Use the API_KEY directly from the environment as required
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Generate a premium creative marketing tagline and a brief 1-sentence strategy for a brand named "${brandName}".`,
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

    const text = response.text;
    if (!text) throw new Error("Empty AI response");
    
    return JSON.parse(text);
  } catch (error) {
    console.error("AI Strategy generation failed:", error);
    return {
      tagline: "Unleash the Future.",
      strategy: "Bespoke digital experiences that redefine industry standards through creative excellence."
    };
  }
};
