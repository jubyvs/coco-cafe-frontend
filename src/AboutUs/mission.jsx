import React from 'react';
import * as Bootstrap from 'react-bootstrap';

const Mission = () => {
    return(
        <Bootstrap.Row xs={1} md={3} className="p-3 g-5">
            {Array.from({ length: 12 }).map((_, idx) => (
                <Bootstrap.Col>
                <Bootstrap.Card>
                    <Bootstrap.Card.Img variant="top" src="holder.js/100px160" />
                    <Bootstrap.Card.Body>
                    <Bootstrap.Card.Title>Card title</Bootstrap.Card.Title>
                    <Bootstrap.Card.Text>
                        This is a description
                    </Bootstrap.Card.Text>
                    </Bootstrap.Card.Body>
                </Bootstrap.Card>
                </Bootstrap.Col>
            ))}
        </Bootstrap.Row>
    );
}

export default Mission;