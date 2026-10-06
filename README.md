# AI Inbox Automation – Backend

A Node.js and TypeScript backend for an AI-powered inbox automation workflow.

The API receives incoming messages, uses an LLM to analyze their content, extracts structured information, determines the recommended action, and generates a suggested response.

## Features

* REST API for message processing
* LLM integration
* Message classification
* Intent detection
* Structured information extraction
* Priority detection
* AI confidence scoring
* Automated action determination
* AI-generated response suggestions
* Structured output validation
* Human-review handling for low-confidence results

## Tech Stack

* Node.js
* Express
* TypeScript
* LLM API
* Zod
* REST API

## Workflow

```text
 Incoming Message
        ↓
   Express API
        ↓
    AI Service
        ↓
       LLM
        ↓
Structured AI Output
        ↓
  Zod Validation
        ↓
 Automation Engine
        ↓
 Automatic Action
        or
   Human Review

```

## Environment Variables

Create a `.env` file in the project root:

```env
OPENAI_API_KEY=your_openai_api_key
```
You can obtain an API key from the OpenAI Platform.

### API Credits

This project uses the OpenAI API for AI message analysis.

> **Note:** OpenAI API usage requires prepaid credits. Add API credits to enable the AI functionality. Automatic recharge can be disabled in the billing settings.

[OpenAI API Billing](https://platform.openai.com/settings/organization/billing/)


## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

## AI Automation

The backend follows a structured AI workflow:

1. Receive the incoming message
2. Send the message to the LLM
3. Classify the message
4. Extract relevant information
5. Determine priority and intent
6. Generate a recommended action
7. Generate a suggested response
8. Validate the AI output
9. Decide whether automatic processing or human review is appropriate

## Purpose

This project demonstrates practical AI automation using Node.js, TypeScript and an LLM.

The goal is to demonstrate an AI-powered workflow rather than build a complete email client or inbox management system.

## Status

🚧 In development
