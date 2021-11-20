import React, { useState, useEffect } from 'react'
import { quiz as quizData } from './data/quiz'

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [quiz, setQuiz] = useState(quizData)
  const { id, question, options } = quiz[currentIndex]

  const nextQuestion = () => {
    if (quiz.length - 1 === currentIndex) return
    setCurrentIndex(currentIndex + 1)
  }

  const previousQuestion = () => {
    if (currentIndex === 0) return
    setCurrentIndex(currentIndex - 1)
  }

  const selectOption = (indexSelected, indexOptionSelected) => {
    setQuiz(
      quiz.map((item, index) =>
        index === indexSelected
          ? {
              ...item,
              selected: true,
              options: options.map((item, index) =>
                index === indexOptionSelected
                  ? { ...item, selected: true }
                  : { ...item, selected: false }
              )
            }
          : item
      )
    )
  }

  return (
    <div>
      <h2 className='text-center mb-3 mt-3'></h2>
      <div className='card mb-3'>
        <div
          className='card-body'
          style={{
            display: 'flex',
            padding: 10,
            flexWrap: 'wrap'
          }}
        ></div>
      </div>
      <div className='card'>
        <div
          className='card-header bg-white font-weight-bold'
          style={{
            fontSize: 20,
            border: '1px solid #ccc',
            backgroundColor: '#f4f4f4',
            padding: '20px',
            marginBottom: '10px'
          }}
        >
          {currentIndex + 1}. {question}
        </div>
        <div className='card-body'>
          {options.map((item, index) =>
            item?.selected === true ? (
              <div
                style={{
                  display: 'flex',
                  justifyItems: 'center',
                  alignItems: 'center',
                  fontSize: 18,
                  border: '1px solid #ccc',
                  backgroundColor: '#f4f4f4',
                  padding: '20px',
                  marginBottom: '10px'
                }}
                key={index}
                disabled
              >
                <div
                  style={{
                    height: 20,
                    width: 20,
                    borderRadius: 100,
                    backgroundColor: item?.selected ? 'blue' : 'grey',
                    cursor: 'pointer',
                    marginRight: 5
                  }}
                  onClick={() => selectOption(currentIndex, index)}
                />
                {item.title}
              </div>
            ) : (
              <div
                style={{
                  display: 'flex',
                  justifyItems: 'center',
                  alignItems: 'center',
                  fontSize: 18
                }}
                key={index}
              >
                <div
                  style={{
                    height: 20,
                    width: 20,
                    borderRadius: 100,
                    backgroundColor: item?.selected ? 'black' : 'grey',
                    cursor: 'pointer',
                    marginRight: 5
                  }}
                  onClick={() => selectOption(currentIndex, index)}
                />
                {item.title}
              </div>
            )
          )}
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          paddingTop: 10
        }}
      >
        <button
          className='btn btn-info col-sm-2'
          onClick={() => previousQuestion()}
          disabled={currentIndex === 0 ? true : false}
        >
          Previous
        </button>

        <button
          className='btn btn-primary col-sm-2'
          onClick={() => nextQuestion()}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default App
