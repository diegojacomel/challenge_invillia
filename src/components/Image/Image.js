/** Modules */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const FigureStyle = styled.figure`
    display: inline-block;
    margin: ${props => props.margin ? props.margin : "0"};
    width: ${props => props.size ? props.size : "100%"};
    max-width: ${props => props.theme.spacing.full};
`

const Figure = ({ children, size, margin }) => (
    <FigureStyle size={size} margin={margin}>
        {children}
    </FigureStyle>
)

const ImgStyle = styled.img`
    display: block;
    max-width: ${props => props.theme.spacing.full};
`

const Img = ({ src, alt, title }) => (
    <ImgStyle src={src} alt={alt} title={title} />
)

function Image({ src, alt, title, size, margin }) {
    return (
        <Figure id="testFigure" size={size} margin={margin}>
            <Img src={src} alt={alt} title={title} id="testImg" />
        </Figure>
    )
}

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    title: PropTypes.string,
    size: PropTypes.string,
    margin: PropTypes.string
}

Image.defaultProps = {
    src: "#",
    alt: "Image",
    title: "Image",
    size: "100%",
    margin: "0"
}

export default Image;
