/**
 * Determines issue priority based on AI-detected category,
 * confidence score, and number of similar nearby reports (votes proxy).
 */
const calculatePriority = ({ category, confidence = 0.5, voteCount = 0 }) => {
  const highRiskCategories = ['Electricity', 'Drainage', 'Water'];
  let score = 0;

  if (highRiskCategories.includes(category)) score += 2;
  if (confidence > 0.8) score += 2;
  else if (confidence > 0.5) score += 1;

  if (voteCount > 20) score += 3;
  else if (voteCount > 10) score += 2;
  else if (voteCount > 5) score += 1;

  if (score >= 6) return 'Critical';
  if (score >= 4) return 'High';
  if (score >= 2) return 'Medium';
  return 'Low';
};

module.exports = { calculatePriority };