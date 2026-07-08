const axios = require('axios');

/**
 * Sends the uploaded image URL to the Python/YOLO microservice
 * and returns the detected category + confidence score.
 * Falls back to a default category if the AI service is unreachable.
 */
const classifyIssueImage = async (imageUrl) => {
  try {
    const response = await axios.post(
      process.env.AI_SERVICE_URL,
      { image_url: imageUrl },
      { timeout: 10000 }
    );

    const { category, confidence } = response.data;
    return { category: category || 'Other', confidence: confidence || 0.5 };
  } catch (err) {
    console.error('AI service error:', err.message);
    return { category: 'Other', confidence: 0.5 };
  }
};

module.exports = { classifyIssueImage };