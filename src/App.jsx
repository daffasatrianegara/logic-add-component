import { useState } from "react";

function App() {
  const [quizzes, setQuizzes] = useState([
    { number: 1, question: "", a: "", b: "", c: "", d: "", answer: "" },
  ]);

  const handleAddQuiz = () => {
    setQuizzes([
      ...quizzes,
      {
        number: quizzes.length + 1,
        question: "",
        a: "",
        b: "",
        c: "",
        d: "",
        answer: "",
      },
    ]);
  };

  const handleQuizChange = (index, field, value) => {
    const updatedQuizzes = quizzes.map((quiz, i) =>
      i === index ? { ...quiz, [field]: value } : quiz
    );
    setQuizzes(updatedQuizzes);
  };

  const handleSubmit = async () => {
    const dataToSend = {
      quizzes,
    };

    console.log(dataToSend);
  };

  console.log(quizzes);

  return (
    <div className="p-20">
      <p className="font-semibold text-3xl text-center">Test Logic Add Quiz</p>
      <div className="flex justify-end items-center my-3">
        <button
          className="px-8 py-2 bg-green-600 rounded text-lg font-bold text-white hover:bg-green-500"
          onClick={handleAddQuiz}
        >
          Tambah Quiz
        </button>
      </div>
      <p className="text-xl">
        Jumlah komponen Quiz:{" "}
        <span className="font-semibold">{quizzes.length}</span>
      </p>
      <form className="flex flex-col gap-2 mt-3">
        {quizzes.map((quiz, index) => (
          <div key={index} className="p-5 bg-slate-200 w-1/2 h-auto rounded">
            <div className="flex gap-3">
              <p className="text-lg font-medium">{quiz.number}</p>
              <input
                className="ps-2 w-full h-7 rounded"
                type="text"
                placeholder="Masukkan soal Quiz anda..."
                value={quiz.question}
                onChange={(e) =>
                  handleQuizChange(index, "question", e.target.value)
                }
              />
            </div>
            <div className="flex flex-col gap-2 mt-3">
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  name={`quizOption-${index}`}
                  value="a"
                  checked={quiz.answer === "a"}
                  onChange={(e) =>
                    handleQuizChange(index, "answer", e.target.value)
                  }
                />
                <p>A. </p>
                <input
                  className="w-full h-7 ps-2 rounded"
                  type="text"
                  placeholder="Tambahkan jawaban untuk opsi A"
                  value={quiz.a}
                  onChange={(e) => handleQuizChange(index, "a", e.target.value)}
                />
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  name={`quizOption-${index}`}
                  value="b"
                  checked={quiz.answer === "b"}
                  onChange={(e) =>
                    handleQuizChange(index, "answer", e.target.value)
                  }
                />
                <p>B. </p>
                <input
                  className="w-full h-7 ps-2 rounded"
                  type="text"
                  placeholder="Tambahkan jawaban untuk opsi B"
                  value={quiz.b}
                  onChange={(e) => handleQuizChange(index, "b", e.target.value)}
                />
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  name={`quizOption-${index}`}
                  value="c"
                  checked={quiz.answer === "c"}
                  onChange={(e) =>
                    handleQuizChange(index, "answer", e.target.value)
                  }
                />
                <p>C. </p>
                <input
                  className="w-full h-7 ps-2 rounded"
                  type="text"
                  placeholder="Tambahkan jawaban untuk opsi C"
                  value={quiz.c}
                  onChange={(e) => handleQuizChange(index, "c", e.target.value)}
                />
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  name={`quizOption-${index}`}
                  value="d"
                  checked={quiz.answer === "d"}
                  onChange={(e) =>
                    handleQuizChange(index, "answer", e.target.value)
                  }
                />
                <p>D. </p>
                <input
                  className="w-full h-7 ps-2 rounded"
                  type="text"
                  placeholder="Tambahkan jawaban untuk opsi D"
                  value={quiz.d}
                  onChange={(e) => handleQuizChange(index, "d", e.target.value)}
                />
              </div>
            </div>
          </div>
        ))}
        <input
          className="mt-5 w-full py-2 rounded bg-green-500 text-xl font-bold text-white hover:bg-green-400"
          type="button"
          onClick={handleSubmit}
          value={"Upload Data Quiz"}
        />
      </form>
    </div>
  );
}

export default App;
