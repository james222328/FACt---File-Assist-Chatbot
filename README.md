# FACT - File Assist ChatboT

The FACT file in this repository is a python notebook copy of this Project.

## Overview
FACT (File Assist ChatboT) is a Streamlit-based application that allows users to:
- Upload and process PDF, DOCX, and PPTX files.
- Extract and analyze text and images from files using OCR.
- Generate text embeddings and store them in a FAISS vector store for similarity searches.
- Use AI-powered conversational features to answer questions based on uploaded documents or scraped web content.
- Interact with web-scraped content and AI-generated prompts.

## Features
1. **File Processing**:  
   - Extract text and images from PDF, DOCX, and PPTX files.
   - Perform OCR on images in the documents for text extraction.

2. **Conversational AI**:  
   - Generate responses to user queries using Google's Gemini language model.
   - Suggest related prompts based on document content.

3. **Web Scraping**:  
   - Scrape and process text content from a provided URL.

4. **User Authentication**:  
   - Create, authenticate, and delete user accounts securely using SQLite.

5. **Vector Store**:  
   - Create and update FAISS vector stores for similarity search and text chunk embedding.

## Installation

### Prerequisites
- Python 3.8 or higher
- Node.js and npm for localtunnel
- Tesseract-OCR and Poppler-utils for OCR and PDF processing

### Setup Instructions
1. Install Python Dependencies:
   ```bash
   pip install -r requirements.txt
   ```

2. Install Local Dependencies:
   ```bash
   npm install localtunnel
   ```

3. Set Up Environment Variables:
   - Create a `.env` file in the root directory.
   - Add the following environment variable:
     ```
     GOOGLE_API_KEY=<your-google-api-key>
     ```

4. Install System Utilities:
   ```bash
   apt-get install -y poppler-utils tesseract-ocr
   ```

5. Initialize the Database:
   ```python
   python -c "import app; app.create_db()"
   ```

## Running the Application

1. Start the Streamlit Application:
   ```bash
   streamlit run app.py
   ```

2. Expose the Application with Localtunnel:
   ```bash
   npx localtunnel --port 8501
   ```

3. Access the App:
   - Visit the URL provided by Localtunnel.

## Usage
### File Upload and Processing
1. Upload PDF, DOCX, or PPTX files via the sidebar.
2. Process the files to extract text, images, and other relevant data.
3. View suggested questions or enter custom queries for AI-powered answers.

### Web Scraping
1. Enter a URL in the sidebar.
2. Scrape and process the content for text analysis and Q&A.

### Authentication
- Use the sidebar to sign up, log in, or delete your account.

## Dependencies
- **Core Libraries**: Streamlit, SQLite, PyPDF2, PyMuPDF, pdf2image, pytesseract
- **AI and Embeddings**: Google Generative AI, LangChain, FAISS
- **Web Scraping**: BeautifulSoup, Requests
- **OCR and Image Processing**: Tesseract-OCR, PIL


```
