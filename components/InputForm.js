import React from 'react'

function InputForm({addTodo, todoBody, setTodoBody}) {
  return (
<section class="mt-12 max-w-5xl p-6 mx-auto bg-white shadow-xl rounded-xl">
  <form class="flex mb-0 space-x-4" onSubmit={addTodo}>
    <div class="flex-1">
      <label class="sr-only" for="search"> Task </label>

      <input
        class="w-full h-12 text-sm border-gray-100 rounded-lg"
        id="search"
        placeholder="Enter the Task"
        type="text"
        value={todoBody.task}
        autoComplete="off"
        onChange={(e) => setTodoBody({...todoBody, task: e.target.value})}
      />
    </div>

    <div class="flex-1 hidden sm:block">
      <label class="sr-only" htmlFor="team"> Team </label>
      <select class="w-full h-12 text-sm border-gray-100 rounded-lg" id="team" onChange={(e) => setTodoBody({...todoBody, team: e.target.value})}>
        <option value="" selected disabled>Select Team</option>
        <option value="HR">HR</option>
        <option value="Engineering">Engineering</option>
        <option value="Finance">Finance</option>
        <option value="Legal">Legal</option>
      </select>
    </div>

    <div>
      <button
        class="inline-flex items-center justify-center w-auto bg-blue h-12 px-12 text-white bg-blue-700 rounded-lg"
        type="submit"
      >
        Add Task
      </button>
    </div>
  </form>
</section>
  )
}

export default InputForm