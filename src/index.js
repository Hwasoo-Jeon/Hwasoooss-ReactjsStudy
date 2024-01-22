import 'component2/My.css';
import BoardProps from 'component4/BoardPropsReducer';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Counter1 from 'component4/ReducerTest';
import { OutBody } from 'component4/PropsAndContext';
import CunterContentManager from 'component4/CunterContent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/reducer1" element={<Counter1 />} />
                <Route
                    path="/2"
                    element={
                        <>
                            <OutBody />
                            <CunterContentManager />
                        </>
                    }
                />
            </Routes>
        </BrowserRouter>
        <BoardProps></BoardProps>
        {/*
        <CSSTest></CSSTest>
        <ComponentTest></ComponentTest>
        <MyComponentB></MyComponentB>
        <hr></hr>
        <VarTest2></VarTest2>
        <hr></hr>
        <p>이거 그대로 넣어둔겅임</p>
        <VarTest3></VarTest3>
        <hr></hr> */}
    </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
