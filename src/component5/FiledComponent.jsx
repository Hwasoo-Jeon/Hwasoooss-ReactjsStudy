import { Col, Form, Row } from 'react-bootstrap';

function FieldComponent({ children, colname, data, changeHandler }) {
    return (
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
                {children}
            </Form.Label>
            <Col sm="10">
                <Form.Control
                    readOnly={changeHandler !== null ? false : true}
                    value={data || ''}
                    name={colname}
                    onChange={changeHandler}
                />
            </Col>
        </Form.Group>
    );
}

export function FieldComponentReadOnly({ children, colname, data }) {
    return (
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
                {children}
            </Form.Label>
            <Col sm="10">
                <Form.Control defaultValue={data || ''} name={colname} plaintext />
            </Col>
        </Form.Group>
    );
}

export default FieldComponent;
