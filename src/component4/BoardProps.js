import 'bootstrap/dist/css/bootstrap.min.css';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Button, Form, InputGroup, Table } from 'react-bootstrap';

//전역 관리 영역

function BoardProps(props) {
    const emptyBoard = { bno: 1, title: '', content: '', writer: '', active: false };
    const [board, setBoard] = useState(emptyBoard);
    const [boardList, setList] = useState([]);
    var bno = useRef(1);
    const mkBoard = (e) => {
        let target = e.target.name;
        setBoard({ ...board, [target]: e.target.value });
    };
    const mkList = useCallback(() => {
        if (board.title === '' || board.content === '' || board.writer === '') {
            return;
        }
        const newBoard = { ...board, bno: bno.current };
        setList([...boardList, newBoard]);
        bno.current++;
        setBoard(emptyBoard);
    }, [boardList, board]);

    const deleteHandler = (bno) => {
        setList(boardList.filter((board) => board.bno !== bno));
    };

    const updateHandler = (bno) => {
        setList(boardList.map((board) => (board.bno === bno ? { ...board, active: !board.active } : board)));
    };
    useEffect(() => {}, [board]);
    useEffect(() => {}, [boardList]);
    useEffect(() => {}, [mkList]);

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

export { BoardProps as default };
