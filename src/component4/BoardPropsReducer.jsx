import 'bootstrap/dist/css/bootstrap.min.css';
import { useCallback, useEffect, useReducer, useRef, useState } from 'react';
import { Button, Form, InputGroup, Table } from 'react-bootstrap';

const emptyBoard = { bno: 0, title: '', content: '', writer: '', active: false };
const initBoard = { board: emptyBoard, boardList: [] };

function boardReducer(state, action) {
    switch (action.type) {
        case 'INPUT':
            return { ...state, board: { ...state.board, [action.name]: action.value } };
        case 'ADD':
            return { ...state, board: emptyBoard, boardList: state.boardList.concat(action.board) };
        case 'DEL':
            return {
                ...state,
                boardList: state.boardList.filter((board) => board.bno !== action.bno),
            };
        case 'UPDATE':
            return {
                ...state,
                boardList: state.boardList.map((board) =>
                    board.bno === action.bno ? { ...board, active: !board.active } : board
                ),
            };
        default:
            return;
    }
}

function BoardProps(props) {
    var nextbno = useRef(1);
    const [state, dispatcher] = useReducer(boardReducer, initBoard);
    const { board, boardList } = state;
    const mkBoard = (e) => {
        dispatcher({ type: 'INPUT', name: e.target.name, value: e.target.value });
    };

    const mkList = () => {
        if (board.title === '' || board.content === '' || board.writer === '') {
            return;
        }

        const newBoard = { ...board, bno: nextbno.current };
        dispatcher({ type: 'ADD', board: newBoard });
        nextbno.current++;
    };

    const deleteHandler = (bno) => {
        dispatcher({ type: 'DEL', bno });
    };

    const updateHandler = (bno) => {
        dispatcher({ type: 'UPDATE', bno });
    };

    return (
        <div>
            <InputBoard mkBoard={mkBoard} mkList={mkList} board={board}></InputBoard>
            <DisplayBoard
                deleteHandler={deleteHandler}
                boardList={boardList}
                updateHandler={updateHandler}
            ></DisplayBoard>
        </div>
    );
}

function InputBoard({ mkBoard, mkList, board }) {
    // boardList 바뀔때마다 렌더리

    return (
        <div>
            <InputGroup className="mb-3">
                <InputGroup.Text id="a">title</InputGroup.Text>
                <Form.Control name="title" value={board.title} onChange={mkBoard} aria-label="title" />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text id="b">content</InputGroup.Text>
                <Form.Control name="content" value={board.content} onChange={mkBoard} aria-label="content" />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text id="c">writer</InputGroup.Text>
                <Form.Control name="writer" value={board.writer} onChange={mkBoard} aria-label="writer" />
            </InputGroup>
            <MyButton mkList={mkList}>ADD(+)</MyButton>
        </div>
    );
}

function MyButton({ mkList, children }) {
    return (
        <Button variant="danger" onClick={mkList}>
            {children}
        </Button>
    );
}

function DisplayBoard({ boardList, deleteHandler, updateHandler }) {
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>bno</th>
                        <th>title</th>
                        <th>content</th>
                        <th>writer</th>
                        <th>active</th>
                        <th>button</th>
                    </tr>
                </thead>
                <tbody>
                    {boardList &&
                        boardList.map((item, index) => (
                            <tr key={index}>
                                <td>{item.bno}</td>
                                <td style={{ color: item.active ? 'red' : 'black' }}>{item.title}</td>
                                <td>{item.content}</td>
                                <td>{item.writer}</td>
                                <td>{item.active.toString()}</td>
                                <td>
                                    <Button variant="outline-danger" onClick={() => deleteHandler(item.bno)}>
                                        DEL
                                    </Button>{' '}
                                    <Button variant="outline-warning" onClick={() => updateHandler(item.bno)}>
                                        UPDATE
                                    </Button>{' '}
                                </td>
                            </tr>
                        ))}
                </tbody>
            </Table>
        </div>
    );
}

export default BoardProps;
