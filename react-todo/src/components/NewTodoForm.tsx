import React, { useState } from 'react';

export const NewTodoForm: React.FC<{addTodo: Function}> = (props) => {
    const [description, setDescription] = useState('');
    const [assigned, setAssinged] = useState('');

    const submitTodo = () => {
        if (description !== '' && assigned !== '') {
            props.addTodo(description, assigned);
            setDescription('');
            setAssinged('');
        }
    }

    return (
        <div className='mt-5'>
            <form>
                <div className="mb-3">
                    <label className='form-label'>
                        Assigned
                    </label>
                    <input
                        type="text"
                        className='form-control' 
                        required
                        onChange={e => setAssinged(e.target.value)}
                        value={assigned}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">
                        Description
                    </label>
                    <textarea 
                        className='form-control'
                        rows={3}
                        required
                        onChange={e => setDescription(e.target.value)}
                        value={description}
                    ></textarea>
                </div>
                <button
                    type='button'
                    className='btn btn-primary mt-3'
                    onClick={submitTodo}
                >
                    Add Todo
                </button>
            </form>
        </div>
    )
}