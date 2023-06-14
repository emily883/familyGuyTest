/**
 * Retrieves a question and generates a random question for the quiz.
 *
 * @param {Object} req - The request object.
 * @param {Object} params - The route parameters.
 * @param {string} params.id - The ID of the question to retrieve.
 *
 * @returns {Promise<Object>} A promise that resolves to an object containing the correct answer and a randomly generated question ID, or an error response.
 */

import questions from '@/data/quiz.json'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const random = Math.floor(Math.random() * questions.data.length)
    return NextResponse.json({
      randomQuestion: questions.data[random].id,
    })
  } catch (error) {
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}
