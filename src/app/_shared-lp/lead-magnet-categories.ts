/* Result categories for the two result PDFs. Each category's 3 moves are on
   one page of its PDF:
   - Readiness Guide (quiz, max score 13): Band A = 0-4 (page 2),
     Band B = 5-8 (page 3), Band C = 9-13 (page 4).
   - Missed-Call Playbook (calculator, yearly revenue at risk): Tier 1 = under
     $20,000 (page 2), Tier 2 = $20,000 to $74,999 (page 3), Tier 3 = $75,000
     and up (page 4). */

export const QUIZ_MAX_SCORE = 13;

export type QuizBand = "A" | "B" | "C";
export type CalcTier = "1" | "2" | "3";

export const READINESS_GUIDE_PDF = "/resources/cleaning-readiness-guide.pdf";
export const MISSED_CALL_PLAYBOOK_PDF = "/resources/cleaning-missed-call-playbook.pdf";

export const QUIZ_BAND_PAGE: Record<QuizBand, number> = { A: 2, B: 3, C: 4 };
export const CALC_TIER_PAGE: Record<CalcTier, number> = { "1": 2, "2": 3, "3": 4 };

export function quizBand(score: number): QuizBand {
  if (score <= 4) return "A";
  if (score <= 8) return "B";
  return "C";
}

/** Uses the same yearly number the calculator shows as its main result. */
export function calcTier(yearlyAtRisk: number): CalcTier {
  const n = Math.round(yearlyAtRisk);
  if (n < 20000) return "1";
  if (n < 75000) return "2";
  return "3";
}

export function isQuizBand(v: string | undefined): v is QuizBand {
  return v === "A" || v === "B" || v === "C";
}

export function isCalcTier(v: string | undefined): v is CalcTier {
  return v === "1" || v === "2" || v === "3";
}
