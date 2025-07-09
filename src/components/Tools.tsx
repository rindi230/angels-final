import { useState } from "react";
import { Calculator, Activity, Target, Droplets, Scale, TrendingUp, Zap, Heart } from "lucide-react";

export const Tools = () => {
  const [activeTab, setActiveTab] = useState("bmi");
  const [results, setResults] = useState<unknown>({});

  const calculateBMI = (weight: number, height: number) => {
    const heightInMeters = height / 100;
    return (weight / (heightInMeters * heightInMeters)).toFixed(1);
  };

  const getBMICategory = (bmi: number) => {
    if (bmi < 18.5) return { category: "Underweight", color: "text-blue-600", bg: "bg-blue-100" };
    if (bmi < 25) return { category: "Normal weight", color: "text-green-600", bg: "bg-green-100" };
    if (bmi < 30) return { category: "Overweight", color: "text-yellow-600", bg: "bg-yellow-100" };
    return { category: "Obese", color: "text-red-600", bg: "bg-red-100" };
  };

  const calculateBodyFat = (gender: string, age: number, bmi: number) => {
    // Simplified body fat calculation
    let bodyFat = 0;
    if (gender === 'male') {
      bodyFat = (1.20 * bmi) + (0.23 * age) - 16.2;
    } else {
      bodyFat = (1.20 * bmi) + (0.23 * age) - 5.4;
    }
    return Math.max(0, Math.min(50, bodyFat)).toFixed(1);
  };

  const calculateIdealWeight = (height: number, gender: string) => {
    const heightInMeters = height / 100;
    let idealWeight = 0;
    if (gender === 'male') {
      idealWeight = 22 * (heightInMeters * heightInMeters);
    } else {
      idealWeight = 21 * (heightInMeters * heightInMeters);
    }
    return idealWeight.toFixed(1);
  };

  const calculateMacros = (weight: number, height: number, age: number, gender: string, activity: string, goal: string) => {
    // BMR calculation using Mifflin-St Jeor Equation
    let bmr = 0;
    if (gender === 'male') {
      bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
    } else {
      bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
    }

    // Activity multiplier
    const activityMultipliers: { [key: string]: number } = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      very_active: 1.9
    };

    let tdee = bmr * activityMultipliers[activity];

    // Goal adjustment
    if (goal === 'lose') tdee *= 0.85;
    if (goal === 'gain') tdee *= 1.15;

    const protein = Math.round((weight * 2.2) * 1.2); // 1.2g per lb
    const fat = Math.round((tdee * 0.25) / 9); // 25% of calories from fat
    const carbs = Math.round((tdee - (protein * 4) - (fat * 9)) / 4);

    return { protein, fat, carbs, tdee: Math.round(tdee) };
  };

  const calculateWaterIntake = (weight: number, activity: string) => {
    const baseWater = weight * 0.033; // 33ml per kg
    const activityMultipliers: { [key: string]: number } = {
      sedentary: 1,
      light: 1.2,
      moderate: 1.4,
      active: 1.6,
      very_active: 1.8
    };
    return Math.round(baseWater * activityMultipliers[activity] * 1000); // Convert to ml
  };

  const tabs = [
    { id: "bmi", label: "BMI Calculator", icon: Scale },
    { id: "calorie", label: "Calorie Burn", icon: Zap },
    { id: "daily", label: "Daily Calories", icon: Activity },
    { id: "bodyfat", label: "Body Fat %", icon: TrendingUp },
    { id: "ideal", label: "Ideal Weight", icon: Target },
    { id: "macros", label: "Macro Calculator", icon: Calculator },
    { id: "water", label: "Water Intake", icon: Droplets }
  ];

  const tools: { name: string; icon: JSX.Element; component: JSX.Element }[] = [
    // ... existing code ...
  ];

  return (
    <section id="tools" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Fitness Calculators</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Track your fitness journey with our comprehensive suite of health and fitness calculators
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-8 gap-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                    activeTab === tab.id
                      ? "bg-red-600 text-white shadow-lg"
                      : "bg-white text-gray-700 hover:bg-gray-50 shadow-md"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                  <span className="sm:hidden">{tab.label.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>

          {/* BMI Calculator */}
          {activeTab === "bmi" && (
            <div className="bg-white rounded-2xl p-8 shadow-xl animate-fade-in">
              <div className="text-center mb-8">
                <Scale className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-gray-900 mb-2">BMI Calculator</h3>
                <p className="text-gray-600">Calculate your Body Mass Index to understand your weight category</p>
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target as HTMLFormElement);
                  const weight = Number(formData.get("weight"));
                  const height = Number(formData.get("height"));
                  
                  const bmi = Number(calculateBMI(weight, height));
                  const bmiInfo = getBMICategory(bmi);
                  setResults({ ...results, bmi, bmiInfo });
                }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-3">Weight (kg)</label>
                    <input
                      type="number"
                      name="weight"
                      step="0.1"
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300"
                      placeholder="70.5"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-3">Height (cm)</label>
                    <input
                      type="number"
                      name="height"
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300"
                      placeholder="175"
                      required
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Calculate BMI
                </button>
              </form>
              {results.bmi && (
                <div className={`mt-8 p-6 rounded-xl text-center ${results.bmiInfo.bg} border-2 border-current ${results.bmiInfo.color}`}>
                  <p className="text-3xl font-bold mb-2">Your BMI: {results.bmi}</p>
                  <p className="text-xl font-semibold">{results.bmiInfo.category}</p>
                  <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div className="bg-white/50 rounded-lg p-3">
                      <p className="font-semibold">Underweight</p>
                      <p className="text-gray-600">&lt; 18.5</p>
                    </div>
                    <div className="bg-white/50 rounded-lg p-3">
                      <p className="font-semibold">Normal</p>
                      <p className="text-gray-600">18.5 - 24.9</p>
                    </div>
                    <div className="bg-white/50 rounded-lg p-3">
                      <p className="font-semibold">Overweight</p>
                      <p className="text-gray-600">25 - 29.9</p>
                    </div>
                    <div className="bg-white/50 rounded-lg p-3">
                      <p className="font-semibold">Obese</p>
                      <p className="text-gray-600">&gt; 30</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Calorie Burn Calculator */}
          {activeTab === "calorie" && (
            <div className="bg-white rounded-2xl p-8 shadow-xl animate-fade-in">
              <div className="text-center mb-8">
                <Zap className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Calorie Burn Calculator</h3>
                <p className="text-gray-600">Calculate calories burned during different exercises</p>
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target as HTMLFormElement);
                  const exercise = formData.get("exercise") as string;
                  const duration = Number(formData.get("duration"));
                  const weight = Number(formData.get("weight"));
                  
                  const metValues: { [key: string]: number } = {
                    walking: 3.8,
                    running: 8.3,
                    cycling: 7.5,
                    swimming: 8.0,
                    weightlifting: 3.0,
                    yoga: 2.5,
                    dancing: 4.5,
                    basketball: 8.0,
                    tennis: 7.0,
                    hiking: 6.0
                  };
                  
                  const calories = Math.round((metValues[exercise] * weight * duration) / 60);
                  setResults({ ...results, calories, exercise, duration });
                }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-3">Exercise</label>
                    <select
                      name="exercise"
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300"
                      required
                    >
                      <option value="walking">Walking</option>
                      <option value="running">Running</option>
                      <option value="cycling">Cycling</option>
                      <option value="swimming">Swimming</option>
                      <option value="weightlifting">Weight Lifting</option>
                      <option value="yoga">Yoga</option>
                      <option value="dancing">Dancing</option>
                      <option value="basketball">Basketball</option>
                      <option value="tennis">Tennis</option>
                      <option value="hiking">Hiking</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-3">Duration (minutes)</label>
                    <input
                      type="number"
                      name="duration"
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300"
                      placeholder="30"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-3">Weight (kg)</label>
                    <input
                      type="number"
                      name="weight"
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300"
                      placeholder="70"
                      required
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Calculate Calories Burned
                </button>
              </form>
              {results.calories && (
                <div className="mt-8 p-6 bg-gradient-to-r from-green-100 to-green-200 rounded-xl text-center border-2 border-green-300">
                  <p className="text-3xl font-bold text-green-800 mb-2">
                    {results.calories} kcal
                  </p>
                  <p className="text-lg text-green-700">
                    Burned during {results.duration} minutes of {results.exercise}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Daily Calorie Needs */}
          {activeTab === "daily" && (
            <div className="bg-white rounded-2xl p-8 shadow-xl animate-fade-in">
              <div className="text-center mb-8">
                <Activity className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Daily Calorie Needs</h3>
                <p className="text-gray-600">Calculate your daily calorie requirements based on activity level</p>
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target as HTMLFormElement);
                  const weight = Number(formData.get("weight"));
                  const height = Number(formData.get("height"));
                  const age = Number(formData.get("age"));
                  const gender = formData.get("gender") as string;
                  const activity = formData.get("activity") as string;
                  
                  // BMR calculation using Mifflin-St Jeor Equation
                  let bmr = 0;
                  if (gender === 'male') {
                    bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
                  } else {
                    bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
                  }

                  const activityMultipliers: { [key: string]: number } = {
                    sedentary: 1.2,
                    light: 1.375,
                    moderate: 1.55,
                    active: 1.725,
                    very_active: 1.9
                  };

                  const tdee = Math.round(bmr * activityMultipliers[activity]);
                  const loseWeight = Math.round(tdee * 0.85);
                  const gainWeight = Math.round(tdee * 1.15);
                  
                  setResults({ ...results, bmr: Math.round(bmr), tdee, loseWeight, gainWeight });
                }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-3">Weight (kg)</label>
                    <input
                      type="number"
                      name="weight"
                      step="0.1"
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300"
                      placeholder="70"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-3">Height (cm)</label>
                    <input
                      type="number"
                      name="height"
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300"
                      placeholder="175"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-3">Age</label>
                    <input
                      type="number"
                      name="age"
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300"
                      placeholder="25"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-3">Gender</label>
                    <select
                      name="gender"
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300"
                      required
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-gray-700 font-semibold mb-3">Activity Level</label>
                    <select
                      name="activity"
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300"
                      required
                    >
                      <option value="sedentary">Sedentary (little/no exercise)</option>
                      <option value="light">Light (light exercise 1-3 days/week)</option>
                      <option value="moderate">Moderate (moderate exercise 3-5 days/week)</option>
                      <option value="active">Active (hard exercise 6-7 days/week)</option>
                      <option value="very_active">Very Active (very hard exercise, physical job)</option>
                    </select>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Calculate Daily Calories
                </button>
              </form>
              {results.tdee && (
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-6 bg-blue-100 rounded-xl text-center border-2 border-blue-300">
                    <p className="text-2xl font-bold text-blue-800 mb-2">BMR</p>
                    <p className="text-3xl font-bold">{results.bmr} kcal</p>
                    <p className="text-sm text-blue-600">Base Metabolic Rate</p>
                  </div>
                  <div className="p-6 bg-green-100 rounded-xl text-center border-2 border-green-300">
                    <p className="text-2xl font-bold text-green-800 mb-2">Maintain</p>
                    <p className="text-3xl font-bold">{results.tdee} kcal</p>
                    <p className="text-sm text-green-600">Daily Calorie Needs</p>
                  </div>
                  <div className="p-6 bg-purple-100 rounded-xl text-center border-2 border-purple-300">
                    <p className="text-2xl font-bold text-purple-800 mb-2">Weight Goals</p>
                    <p className="text-lg font-semibold text-purple-700">Lose: {results.loseWeight} kcal</p>
                    <p className="text-lg font-semibold text-purple-700">Gain: {results.gainWeight} kcal</p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Body Fat Calculator */}
          {activeTab === "bodyfat" && (
            <div className="bg-white rounded-2xl p-8 shadow-xl animate-fade-in">
              <div className="text-center mb-8">
                <TrendingUp className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Body Fat Calculator</h3>
                <p className="text-gray-600">Estimate your body fat percentage using BMI and age</p>
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target as HTMLFormElement);
                  const weight = Number(formData.get("weight"));
                  const height = Number(formData.get("height"));
                  const age = Number(formData.get("age"));
                  const gender = formData.get("gender") as string;
                  
                  const bmi = Number(calculateBMI(weight, height));
                  const bodyFat = calculateBodyFat(gender, age, bmi);
                  setResults({ ...results, bodyFat, gender });
                }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-3">Weight (kg)</label>
                    <input
                      type="number"
                      name="weight"
                      step="0.1"
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300"
                      placeholder="70"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-3">Height (cm)</label>
                    <input
                      type="number"
                      name="height"
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300"
                      placeholder="175"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-3">Age</label>
                    <input
                      type="number"
                      name="age"
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300"
                      placeholder="25"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-3">Gender</label>
                    <select
                      name="gender"
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300"
                      required
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Calculate Body Fat %
                </button>
              </form>
              {results.bodyFat && (
                <div className="mt-8 p-6 bg-gradient-to-r from-orange-100 to-orange-200 rounded-xl text-center border-2 border-orange-300">
                  <p className="text-3xl font-bold text-orange-800 mb-2">
                    {results.bodyFat}%
                  </p>
                  <p className="text-lg text-orange-700">
                    Estimated body fat percentage for {results.gender}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Ideal Weight Calculator */}
          {activeTab === "ideal" && (
            <div className="bg-white rounded-2xl p-8 shadow-xl animate-fade-in">
              <div className="text-center mb-8">
                <Target className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Ideal Weight Calculator</h3>
                <p className="text-gray-600">Calculate your ideal weight based on height and gender</p>
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target as HTMLFormElement);
                  const height = Number(formData.get("height"));
                  const gender = formData.get("gender") as string;
                  
                  const idealWeight = calculateIdealWeight(height, gender);
                  setResults({ ...results, idealWeight, gender });
                }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-3">Height (cm)</label>
                    <input
                      type="number"
                      name="height"
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300"
                      placeholder="175"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-3">Gender</label>
                    <select
                      name="gender"
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300"
                      required
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Calculate Ideal Weight
                </button>
              </form>
              {results.idealWeight && (
                <div className="mt-8 p-6 bg-gradient-to-r from-indigo-100 to-indigo-200 rounded-xl text-center border-2 border-indigo-300">
                  <p className="text-3xl font-bold text-indigo-800 mb-2">
                    {results.idealWeight} kg
                  </p>
                  <p className="text-lg text-indigo-700">
                    Ideal weight for {results.gender} at your height
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Macro Calculator */}
          {activeTab === "macros" && (
            <div className="bg-white rounded-2xl p-8 shadow-xl animate-fade-in">
              <div className="text-center mb-8">
                <Calculator className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Macro Calculator</h3>
                <p className="text-gray-600">Calculate your daily macronutrient needs</p>
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target as HTMLFormElement);
                  const weight = Number(formData.get("weight"));
                  const height = Number(formData.get("height"));
                  const age = Number(formData.get("age"));
                  const gender = formData.get("gender") as string;
                  const activity = formData.get("activity") as string;
                  const goal = formData.get("goal") as string;
                  
                  const macros = calculateMacros(weight, height, age, gender, activity, goal);
                  setResults({ ...results, macros, goal });
                }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-3">Weight (kg)</label>
                    <input
                      type="number"
                      name="weight"
                      step="0.1"
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300"
                      placeholder="70"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-3">Height (cm)</label>
                    <input
                      type="number"
                      name="height"
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300"
                      placeholder="175"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-3">Age</label>
                    <input
                      type="number"
                      name="age"
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300"
                      placeholder="25"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-3">Gender</label>
                    <select
                      name="gender"
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300"
                      required
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-3">Activity Level</label>
                    <select
                      name="activity"
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300"
                      required
                    >
                      <option value="sedentary">Sedentary</option>
                      <option value="light">Light</option>
                      <option value="moderate">Moderate</option>
                      <option value="active">Active</option>
                      <option value="very_active">Very Active</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-3">Goal</label>
                    <select
                      name="goal"
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300"
                      required
                    >
                      <option value="maintain">Maintain Weight</option>
                      <option value="lose">Lose Weight</option>
                      <option value="gain">Gain Weight</option>
                    </select>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Calculate Macros
                </button>
              </form>
              {results.macros && (
                <div className="mt-8 space-y-6">
                  <div className="p-6 bg-gradient-to-r from-purple-100 to-purple-200 rounded-xl text-center border-2 border-purple-300">
                    <p className="text-2xl font-bold text-purple-800 mb-2">Daily Calories</p>
                    <p className="text-3xl font-bold">{results.macros.tdee} kcal</p>
                    <p className="text-sm text-purple-600">For {results.goal} goal</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 bg-red-100 rounded-xl text-center border-2 border-red-300">
                      <p className="text-2xl font-bold text-red-800 mb-2">Protein</p>
                      <p className="text-3xl font-bold">{results.macros.protein}g</p>
                      <p className="text-sm text-red-600">1.2g per lb bodyweight</p>
                    </div>
                    <div className="p-6 bg-yellow-100 rounded-xl text-center border-2 border-yellow-300">
                      <p className="text-2xl font-bold text-yellow-800 mb-2">Fat</p>
                      <p className="text-3xl font-bold">{results.macros.fat}g</p>
                      <p className="text-sm text-yellow-600">25% of calories</p>
                    </div>
                    <div className="p-6 bg-green-100 rounded-xl text-center border-2 border-green-300">
                      <p className="text-2xl font-bold text-green-800 mb-2">Carbs</p>
                      <p className="text-3xl font-bold">{results.macros.carbs}g</p>
                      <p className="text-sm text-green-600">Remaining calories</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Water Intake Calculator */}
          {activeTab === "water" && (
            <div className="bg-white rounded-2xl p-8 shadow-xl animate-fade-in">
              <div className="text-center mb-8">
                <Droplets className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Water Intake Calculator</h3>
                <p className="text-gray-600">Calculate your daily water intake needs</p>
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target as HTMLFormElement);
                  const weight = Number(formData.get("weight"));
                  const activity = formData.get("activity") as string;
                  
                  const waterIntake = calculateWaterIntake(weight, activity);
                  const glasses = Math.round(waterIntake / 250); // 250ml per glass
                  setResults({ ...results, waterIntake, glasses });
                }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-3">Weight (kg)</label>
                    <input
                      type="number"
                      name="weight"
                      step="0.1"
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300"
                      placeholder="70"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-3">Activity Level</label>
                    <select
                      name="activity"
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300"
                      required
                    >
                      <option value="sedentary">Sedentary</option>
                      <option value="light">Light</option>
                      <option value="moderate">Moderate</option>
                      <option value="active">Active</option>
                      <option value="very_active">Very Active</option>
                    </select>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Calculate Water Intake
                </button>
              </form>
              {results.waterIntake && (
                <div className="mt-8 p-6 bg-gradient-to-r from-blue-100 to-blue-200 rounded-xl text-center border-2 border-blue-300">
                  <p className="text-3xl font-bold text-blue-800 mb-2">
                    {results.waterIntake} ml
                  </p>
                  <p className="text-lg text-blue-700 mb-4">
                    Daily water intake ({results.glasses} glasses)
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div className="bg-white/50 rounded-lg p-3">
                      <p className="font-semibold">Morning</p>
                      <p className="text-blue-600">{Math.round(results.glasses * 0.3)} glasses</p>
                    </div>
                    <div className="bg-white/50 rounded-lg p-3">
                      <p className="font-semibold">Afternoon</p>
                      <p className="text-blue-600">{Math.round(results.glasses * 0.4)} glasses</p>
                    </div>
                    <div className="bg-white/50 rounded-lg p-3">
                      <p className="font-semibold">Evening</p>
                      <p className="text-blue-600">{Math.round(results.glasses * 0.2)} glasses</p>
                    </div>
                    <div className="bg-white/50 rounded-lg p-3">
                      <p className="font-semibold">Night</p>
                      <p className="text-blue-600">{Math.round(results.glasses * 0.1)} glasses</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
