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

  const handleDeleteLastQuiz = () => {
    if (quizzes.length > 1) {
      const updatedQuizzes = quizzes.slice(0, -1);
      setQuizzes(updatedQuizzes);
    }
  };

  const handleDeleteQuiz = (index) => {
    const updatedQuizzes = quizzes.filter((_, i) => i !== index);
    const renumberedQuizzes = updatedQuizzes.map((quiz, i) => ({
      ...quiz,
      number: i + 1,
    }));
    setQuizzes(renumberedQuizzes);
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
    <div className="p-10 md:p-20 max-sm:p-5">
      <p className="font-semibold text-3xl text-center max-md:text-xl">
        Test Logic Add Quiz
      </p>
      <div className="flex justify-end items-center my-3 gap-3">
        <button
          className="px-8 py-2 bg-red-600 text-lg rounded font-bold text-white max-md:py-1 max-md:px-5 max-md:text-base max-sm:text-sm hover:bg-red-500 disabled:bg-red-300 disabled:cursor-not-allowed"
          onClick={handleDeleteLastQuiz}
          disabled={quizzes.length === 1}
        >
          Delete Quiz
        </button>
        <button
          className="px-8 py-2 bg-green-600 text-lg rounded font-bold text-white max-md:py-1 max-md:px-5 max-md:text-base max-sm:text-sm hover:bg-green-500"
          onClick={handleAddQuiz}
        >
          Tambah Quiz
        </button>
      </div>
      <p className="text-xl max-md:text-base">
        Jumlah komponen Quiz:{" "}
        <span className="font-semibold">{quizzes.length}</span>
      </p>
      <form className="flex flex-col gap-2 mt-3">
        {quizzes.map((quiz, index) => (
          <div
            key={index}
            className="p-5 bg-slate-200 w-1/2 h-auto rounded max-md:w-full"
          >
            <div className="flex justify-end items-center mb-5">
              <button
                className="py-1 px-5 text-white font-semibold text-sm rounded bg-red-600 hover:bg-red-400 disabled:bg-red-300 disabled:cursor-not-allowed"
                onClick={(e) => {
                  e.preventDefault();
                  handleDeleteQuiz(index);
                }}
                disabled={quizzes.length === 1}
              >
                Delete
              </button>
            </div>
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
