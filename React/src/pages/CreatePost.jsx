import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom"

const CreatePost = () => {
  const [name, setName] = useState('')
  const [alias, setAlias] = useState('')
  const [isPending, setIsPending] = useState('false')

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    const hero = { name, alias }

    setIsPending(true)

    // POST Req to add Hero
    fetch('http://127.0.0.1:8000/heroes/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(hero)
    }).then(() => {
      console.log('New hero added.')
      setIsPending(false)
      navigate('/')
    })
  }

  return (
    <>
       <div className="create">
        <h2>Create Post</h2>
        <form onSubmit={handleSubmit}>
          <label>Hero name:</label>
          <input 
            type="text" 
            required 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Hero alias:</label>
          <textarea
            required
            value={alias}
            onChange={(e) => setAlias(e.target.value)}
          ></textarea>
          { isPending && <button>Add Hero</button> }
          { !isPending && <button disabled> Creating hero...</button> }
        </form>
      </div>
    </>
  );
}

export default CreatePost;
