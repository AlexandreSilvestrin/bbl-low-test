import { quizResponses, type QuizResponse, type InsertQuizResponse } from "@shared/schema";

export interface IStorage {
  getQuizResponse(id: number): Promise<QuizResponse | undefined>;
  createQuizResponse(response: InsertQuizResponse): Promise<QuizResponse>;
  getQuizResponsesByEmail(email: string): Promise<QuizResponse[]>;
}

export class MemStorage implements IStorage {
  private quizResponses: Map<number, QuizResponse>;
  private currentId: number;

  constructor() {
    this.quizResponses = new Map();
    this.currentId = 1;
  }

  async getQuizResponse(id: number): Promise<QuizResponse | undefined> {
    return this.quizResponses.get(id);
  }

  async createQuizResponse(insertResponse: InsertQuizResponse): Promise<QuizResponse> {
    const id = this.currentId++;
    const response: QuizResponse = {
      id,
      email: insertResponse.email,
      name: insertResponse.name,
      ageRange: insertResponse.ageRange ?? null,
      bblExperience: insertResponse.bblExperience ?? null,
      mainGoals: insertResponse.mainGoals ?? null,
      bodyType: insertResponse.bodyType ?? null,
      buttType: insertResponse.buttType ?? null,
      flexibility: insertResponse.flexibility ?? null,
      buttImprovements: insertResponse.buttImprovements ?? null,
      underwearType: insertResponse.underwearType ?? null,
      bottomStyle: insertResponse.bottomStyle ?? null,
      painAreas: insertResponse.painAreas ?? null,
      exerciseFrequency: insertResponse.exerciseFrequency ?? null,
      stairsCondition: insertResponse.stairsCondition ?? null,
      workRoutine: insertResponse.workRoutine ?? null,
      dailyActivity: insertResponse.dailyActivity ?? null,
      energyLevels: insertResponse.energyLevels ?? null,
      eatingRoutine: insertResponse.eatingRoutine ?? null,
      dietType: insertResponse.dietType ?? null,
      foodRestrictions: insertResponse.foodRestrictions ?? null,
      insecurityAreas: insertResponse.insecurityAreas ?? null,
      intimacyInsecurities: insertResponse.intimacyInsecurities ?? null,
      height: insertResponse.height ?? null,
      heightUnit: insertResponse.heightUnit ?? null,
      currentWeight: insertResponse.currentWeight ?? null,
      weightUnit: insertResponse.weightUnit ?? null,
      targetWeight: insertResponse.targetWeight ?? null,
      age: insertResponse.age ?? null,
      workoutTime: insertResponse.workoutTime ?? null,
      workoutFrequency: insertResponse.workoutFrequency ?? null,
      selectedPlan: insertResponse.selectedPlan ?? null,
      couponCode: insertResponse.couponCode ?? null,
      bmiCategory: insertResponse.bmiCategory ?? null,
      fitnessScore: insertResponse.fitnessScore ?? null,
      motivationLevel: insertResponse.motivationLevel ?? null,
      createdAt: new Date()
    };
    this.quizResponses.set(id, response);
    return response;
  }

  async getQuizResponsesByEmail(email: string): Promise<QuizResponse[]> {
    return Array.from(this.quizResponses.values()).filter(
      (response) => response.email === email,
    );
  }
}

export const storage = new MemStorage();
