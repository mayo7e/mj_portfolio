import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Arial', sans-serif;
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
  }

  .header {
    padding: 0px;
    text-align: center;
  }

  .navigation {
    position: fixed;
    top: 0;
    left: 0;
    width: 200px;
    height: 100%;
    background-color: ${({ theme }) => theme.panel};
    padding-top: 50px;
    box-shadow: 2px 0 5px rgba(0,0,0,0.1);
  }

  .navigation ul {
    list-style: none;
    padding: 0;
  }

  .navigation li {
    margin: 20px 0;
  }

  .navigation a {
    text-decoration: none;
    color: ${({ theme }) => theme.text};
    padding: 10px;
    display: block;
    transition: background-color 0.3s;
  }

  .navigation a:hover {
    background-color: ${({ theme }) => theme.hover};
  }

  .content-container {
    margin-left: 200px;
    padding: 20px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
  }

  .horizontal-scroll {
    display: flex;
  }

  .panel {
    min-width: 100vw;
    padding: 20px;
    background-color: ${({ theme }) => theme.panel};
    border-right: 1px solid ${({ theme }) => theme.border};
  }

  .card-container {
    display: flex;
    gap: 20px;
  }

  .card {
    background-color: ${({ theme }) => theme.cardBackground};
    border: 1px solid ${({ theme }) => theme.border};
    border-radius: 10px;
    padding: 20px;
    transition: transform 0.3s;
  }

  .card:hover {
    transform: scale(1.05);
  }

  .card h4 {
    margin: 0 0 10px 0;
  }

  .card p {
    margin: 0;
  }


  .footer {
    padding: 20px;
    text-align: center;
  }

  .footer nav {
    margin-bottom: 10px;
  }

  .footer nav a {
    margin: 0 10px;
    text-decoration: none;
    color: ${({ theme }) => theme.text};
  }

  .footer .contact-info p {
    margin: 5px 0;
  }
`;
