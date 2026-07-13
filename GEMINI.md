# ============================================================================
# VISIONFORGE - GEMINI PROJECT GUIDE
# Version: 1.0
# Project Status: Active Development
# Maintainer: VisionForge Development Team
# Purpose:
# This document defines the permanent architecture, development standards,
# coding rules, workflows, and long-term vision for VisionForge.
#
# Gemini must read this document before making any code changes.
# ============================================================================

# ============================================================================
# PART 1
# PROJECT VISION, OBJECTIVES & DEVELOPMENT PHILOSOPHY
# ============================================================================

# PROJECT NAME

VisionForge

---

# PROJECT SUMMARY

VisionForge is an AI-powered Smart Healthcare Access Platform.

The purpose of VisionForge is to simplify how patients discover healthcare services,
find the right doctor, book appointments, reduce waiting time,
and provide hospitals with intelligent patient flow management.

VisionForge is NOT a hackathon demo.

VisionForge is being developed as a scalable, production-quality application
that can continue evolving into a real startup.

Every code change must support long-term maintainability.

---

# PRIMARY OBJECTIVES

The application should solve the following real-world problems.

• Long waiting times

• Patients choosing the wrong specialist

• Lack of real-time doctor availability

• No unified appointment platform across hospitals

• Poor queue management

• Limited hospital analytics

• Poor communication between patients and hospitals

• Lack of intelligent recommendations

---

# LONG TERM GOALS

VisionForge should eventually support

✓ AI Symptom Analysis

✓ Doctor Recommendation

✓ Smart Appointment Booking

✓ Real-Time Queue Prediction

✓ Queue Position Tracking

✓ Hospital Dashboard

✓ Doctor Dashboard

✓ Patient Dashboard

✓ Admin Dashboard

✓ Notifications

✓ Medical History

✓ Reports

✓ Analytics

✓ Multi-Hospital Support

✓ Cloud Deployment

✓ Agentic AI Assistant

✓ Mobile Application

---

# DEVELOPMENT PHILOSOPHY

VisionForge is designed as a production-ready software project.

Every change should improve:

• Reliability

• Performance

• Maintainability

• Scalability

• Security

Never sacrifice architecture for quick fixes.

---

# ROLE OF GEMINI

Gemini is NOT a code generator.

Gemini is the Lead Software Architect,
Senior Full Stack Engineer,
Backend Engineer,
Frontend Engineer,
DevOps Engineer,
QA Engineer,
Code Reviewer,
and Technical Mentor.

Gemini should always think before modifying code.

---

# BEFORE WRITING CODE

Gemini MUST:

1.
Read the relevant project files.

2.
Understand the existing implementation.

3.
Understand dependencies.

4.
Understand architecture.

5.
Understand routing.

6.
Understand backend APIs.

7.
Understand frontend components.

Only then should code be written.

---

# NEVER DO THESE

Never rebuild the project.

Never rewrite everything.

Never create duplicate folders.

Never create duplicate components.

Never duplicate APIs.

Never duplicate routes.

Never create multiple implementations of the same feature.

Never ignore existing architecture.

Never remove working features.

Never comment out code simply to remove errors.

Never hardcode secrets.

Never introduce breaking changes without a valid reason.

---

# ALWAYS DO THESE

Always preserve existing functionality.

Always preserve UI unless improvement is required.

Always write modular code.

Always follow clean architecture.

Always explain significant changes before applying them.

Always test after major changes.

Always fix the root cause instead of hiding errors.

Always prefer improving existing code over replacing it.

---

# DEVELOPMENT PRIORITIES

When multiple issues exist,
Gemini should solve them in this order.

Priority 1

Compilation errors

Priority 2

Dependency errors

Priority 3

Runtime errors

Priority 4

Configuration problems

Priority 5

Database connectivity

Priority 6

Authentication

Priority 7

API functionality

Priority 8

Frontend integration

Priority 9

UI improvements

Priority 10

Performance optimization

---

# PROJECT SCOPE

This project includes

Frontend

Backend

Database

Authentication

REST APIs

AI modules

Analytics

Notifications

File uploads

Administration

Deployment

Testing

Documentation

Gemini should consider the entire ecosystem before implementing changes.

---

# TECHNOLOGY STACK

Frontend

React

Vite

React Router

Axios

Tailwind CSS (if used)

Backend

Node.js

Express.js

Database

MongoDB Atlas

Authentication

JWT

File Storage

Cloudinary (planned)

AI

Python microservices (future)

Machine Learning

Queue Prediction

Doctor Recommendation

Deployment

Docker (future)

Cloud hosting (future)

GitHub Actions (future)

---

# PROJECT PRINCIPLES

Principle 1

Quality over speed.

Principle 2

Architecture over shortcuts.

Principle 3

Readable code over clever code.

Principle 4

Reuse existing code whenever possible.

Principle 5

Every feature should be independently testable.

Principle 6

The codebase should remain understandable for future contributors.

---

# SESSION WORKFLOW

Every Gemini development session should follow the same workflow.

Step 1

Inspect only the relevant module.

Step 2

Identify the primary blocker.

Step 3

Explain the issue briefly.

Step 4

Implement the fix.

Step 5

Build the project.

Step 6

Run the project.

Step 7

Verify the fix.

Step 8

Stop when the assigned module is complete.

Do not continue into unrelated modules unless explicitly requested.

---

# MODULE-BASED DEVELOPMENT

VisionForge must be developed module by module.

Examples:

Module 01

Backend Foundation

Module 02

Database

Module 03

Authentication

Module 04

Complaint Management

Module 05

Appointments

Module 06

Patient Dashboard

Module 07

Doctor Dashboard

Module 08

Hospital Dashboard

Module 09

Admin Dashboard

Module 10

Notifications

Module 11

Analytics

Module 12

AI Services

Each development session should focus on ONE module.

---

# END OF PART 1

# ==========================================================
# PART 2 - PROJECT STRUCTURE & DEVELOPMENT STANDARDS
# VisionForge AI Development Guide
# ==========================================================

# PROJECT STRUCTURE

Always preserve the overall project architecture unless a significant improvement is required.

Root Directory

VisionForge/
│
├── frontend/
├── backend/
├── docs/
├── README.md
├── GEMINI.md
├── .gitignore
└── package.json

Never move folders without a valid architectural reason.

Never duplicate an existing feature.

Never create multiple implementations of the same functionality.

Always prefer improving existing code.

----------------------------------------------------------

# FRONTEND STRUCTURE

frontend/

src/
│
├── assets/
├── components/
│      ├── common/
│      ├── forms/
│      ├── dashboard/
│      ├── cards/
│      ├── layout/
│      └── ui/
│
├── pages/
│      ├── auth/
│      ├── patient/
│      ├── doctor/
│      ├── hospital/
│      ├── admin/
│      └── landing/
│
├── services/
├── hooks/
├── context/
├── utils/
├── constants/
├── routes/
├── styles/
├── App.jsx
└── main.jsx

Rules

Do NOT create duplicate components.

Reuse components whenever possible.

Keep components small.

Each component should have one responsibility.

Maximum recommended size:
300 lines.

Split larger components.

----------------------------------------------------------

# BACKEND STRUCTURE

backend/

src/

controllers/

routes/

models/

middleware/

services/

config/

utils/

validators/

uploads/

server.js

Rules

Business logic belongs inside services.

Routes should only define endpoints.

Controllers should call services.

Models only define schemas.

Never write database logic directly

# ============================================================================
# PART 3
# BACKEND ARCHITECTURE, API STANDARDS & DATABASE RULES
# ============================================================================

# BACKEND OBJECTIVE

The backend is the core of VisionForge.

Its responsibility is to:

• Authenticate users
• Manage patients
• Manage doctors
• Manage hospitals
• Manage appointments
• Manage queues
• Manage AI requests
• Store complaints
• Process analytics
• Provide secure REST APIs
• Connect to MongoDB Atlas
• Serve the frontend

The backend must always be modular, scalable and production-ready.

---------------------------------------------------------------------------

# TECHNOLOGY STACK

Runtime

Node.js

Framework

Express.js

Database

MongoDB Atlas

ODM

Mongoose

Authentication

JWT

Password Encryption

bcrypt

Validation

Express Validator / Zod

Environment

dotenv

Uploads

Cloudinary (Future)

Logging

Morgan

CORS

cors

---------------------------------------------------------------------------

# BACKEND DIRECTORY STRUCTURE

backend/

src/

config/

controllers/

middleware/

models/

routes/

services/

validators/

utils/

uploads/

app.js

server.js

Never place business logic inside routes.

Never place database queries inside routes.

Routes should only map endpoints.

---------------------------------------------------------------------------

# RESPONSIBILITY OF EACH FOLDER

config/

Database connection

JWT configuration

Cloudinary configuration

Application configuration

------------------------------------

controllers/

Receive request

Validate request

Call service

Return response

Controllers must remain thin.

------------------------------------

services/

Business logic

Database operations

AI integration

Queue algorithms

Notification logic

Analytics logic

Services contain the majority of application logic.

------------------------------------

models/

Only Mongoose schemas.

Never put business logic inside models.

------------------------------------

routes/

Define API endpoints.

Never write business logic.

------------------------------------

middleware/

Authentication

Authorization

Validation

Logging

Error handling

Role verification

------------------------------------

validators/

Request validation

Input sanitization

Schema validation

------------------------------------

utils/

Reusable helper functions.

---------------------------------------------------------------------------

# EXPRESS RULES

Always use Express Router.

Separate routes into independent modules.

Do not place every endpoint inside one file.

Group APIs logically.

Example

/auth

/patients

/doctors

/hospitals

/appointments

/queues

/admin

/analytics

---------------------------------------------------------------------------

# DATABASE RULES

Use MongoDB Atlas.

Never hardcode connection strings.

Always read from

process.env.MONGO_URI

Create indexes when useful.

Use ObjectId references.

Avoid duplicate information.

Normalize data whenever practical.

---------------------------------------------------------------------------

# DATABASE MODELS

Expected models

User

Patient

Doctor

Hospital

Appointment

Queue

Notification

MedicalRecord

Analytics

AIRequest

Feedback

Each model should:

Have timestamps enabled.

Validate required fields.

Use enums where applicable.

Avoid unnecessary nesting.

---------------------------------------------------------------------------

# AUTHENTICATION

Authentication uses JWT.

Passwords must always be hashed.

Never store plain text passwords.

Authentication flow

Register

↓

Validate Input

↓

Hash Password

↓

Store User

↓

Login

↓

Verify Password

↓

Generate JWT

↓

Return Token

Protect all private routes.

---------------------------------------------------------------------------

# AUTHORIZATION

Roles

Admin

Hospital

Doctor

Patient

Each role should have different permissions.

Never expose admin functionality to patients.

Never expose hospital management APIs publicly.

---------------------------------------------------------------------------

# API DESIGN

Follow REST conventions.

Examples

POST /api/auth/register

POST /api/auth/login

GET /api/doctors

GET /api/doctors/:id

POST /api/appointments

PUT /api/appointments/:id

DELETE /api/appointments/:id

Never mix responsibilities.

---------------------------------------------------------------------------

# RESPONSE FORMAT

Success

{
  "success": true,
  "message": "...",
  "data": { }
}

Failure

{
  "success": false,
  "message": "...",
  "error": { }
}

Maintain consistent response structures across the API.

---------------------------------------------------------------------------

# ERROR HANDLING

Never expose stack traces.

Never crash the server.

Return meaningful HTTP status codes.

400

Bad Request

401

Unauthorized

403

Forbidden

404

Not Found

409

Conflict

422

Validation Error

500

Internal Server Error

Use centralized error middleware.

---------------------------------------------------------------------------

# INPUT VALIDATION

Validate every request.

Check

Email

Phone

Password strength

Required fields

IDs

Dates

Prevent malformed data from reaching the database.

---------------------------------------------------------------------------

# SECURITY RULES

Never trust client input.

Sanitize requests.

Escape dangerous input.

Hash passwords.

Use JWT expiration.

Protect sensitive routes.

Never expose environment variables.

Never commit secrets.

---------------------------------------------------------------------------

# PERFORMANCE

Use pagination.

Use indexing.

Avoid unnecessary database queries.

Use lean() when appropriate.

Avoid N+1 queries.

---------------------------------------------------------------------------

# LOGGING

Log

Server startup

Database connection

Authentication failures

API errors

Unexpected exceptions

Do not log passwords.

---------------------------------------------------------------------------

# TESTING WORKFLOW

Whenever backend changes are made:

1.

Install dependencies if required.

2.

Run backend.

3.

Read the error.

4.

Fix the error.

5.

Run backend again.

Repeat until backend starts successfully.

---------------------------------------------------------------------------

# DEBUGGING PRIORITY

Gemini should solve backend issues in this order.

1.

Syntax errors

2.

Missing packages

3.

Import errors

4.

Environment variables

5.

Database connection

6.

Authentication

7.

Routes

8.

Controllers

9.

Services

10.

Logic bugs

---------------------------------------------------------------------------

# BACKEND DEVELOPMENT RULES

Never rewrite the backend from scratch.

Never duplicate APIs.

Never create duplicate models.

Reuse existing code.

Keep functions small.

Write reusable services.

Prefer composition over duplication.

Explain significant changes before modifying files.

Always preserve working functionality.

---------------------------------------------------------------------------

# MODULE COMPLETION CRITERIA

A backend module is complete only if:

✓ Server starts successfully

✓ MongoDB connects

✓ Routes load

✓ No runtime errors

✓ Authentication works

✓ API responses are consistent

✓ Error handling works

✓ Code is clean

Only after these checks pass should Gemini move to another backend module.

# END OF PART 3

# ============================================================================
# PART 4
# FRONTEND ARCHITECTURE, UI STANDARDS & USER EXPERIENCE RULES
# ============================================================================

# FRONTEND OBJECTIVE

The frontend is responsible for delivering a fast, responsive,
accessible, and intuitive user experience.

The frontend must communicate with the backend only through APIs.

Business logic should remain in the backend whenever possible.

The frontend should be modular, reusable, scalable, and easy to maintain.

---------------------------------------------------------------------------

# TECHNOLOGY STACK

Framework

React

Build Tool

Vite

Routing

React Router DOM

HTTP Client

Axios

State Management

React Context API

(Custom hooks may be used where appropriate.)

Styling

Tailwind CSS

Icons

Lucide React

Notifications

React Toastify (or equivalent)

Forms

React Hook Form (recommended)

Validation

Zod / Yup (recommended)

---------------------------------------------------------------------------

# FRONTEND DIRECTORY STRUCTURE

frontend/

src/

assets/

components/

common/

forms/

cards/

layout/

dashboard/

navigation/

pages/

landing/

auth/

patient/

doctor/

hospital/

admin/

services/

hooks/

context/

utils/

constants/

routes/

styles/

App.jsx

main.jsx

---------------------------------------------------------------------------

# RESPONSIBILITY OF EACH FOLDER

assets/

Images

Icons

Fonts

Static files

------------------------------------

components/

Reusable UI components only.

Examples:

Button

Input

Modal

Card

Loader

Navbar

Sidebar

Toast

Pagination

SearchBar

------------------------------------

pages/

Full application pages.

Examples:

Login

Dashboard

Appointment

Profile

Complaint

Analytics

------------------------------------

services/

All API calls.

Never call Axios directly inside components.

------------------------------------

hooks/

Reusable React hooks.

------------------------------------

context/

Authentication Context

Theme Context

Notification Context

Application Context

------------------------------------

utils/

Reusable helper functions.

---------------------------------------------------------------------------

# COMPONENT RULES

Components should:

Have one responsibility.

Be reusable.

Be readable.

Avoid duplication.

Maximum recommended size:

300 lines.

Split larger components.

---------------------------------------------------------------------------

# PAGE RULES

Pages should:

Display information.

Handle layout.

Call services.

Avoid business logic.

---------------------------------------------------------------------------

# UI PRESERVATION RULE

This project already has an existing UI.

Gemini MUST preserve the design.

Do NOT redesign pages unless explicitly requested.

Maintain:

Color palette

Spacing

Typography

Icons

Layout

Navigation

Responsiveness

Animations

---------------------------------------------------------------------------

# RESPONSIVE DESIGN

Every page should support:

Desktop

Laptop

Tablet

Mobile

Avoid fixed widths.

Prefer Flexbox and Grid.

---------------------------------------------------------------------------

# ROUTING RULES

Use React Router.

Group routes logically.

Examples:

/

/login

/register

/dashboard

/patient

/doctor

/hospital

/admin

Use protected routes for authenticated pages.

Redirect unauthenticated users to login.

---------------------------------------------------------------------------

# STATE MANAGEMENT

Global state should only include:

User

Authentication

Notifications

Theme

Application settings

Local state belongs inside components.

---------------------------------------------------------------------------

# API COMMUNICATION

Never call fetch() directly inside pages.

Use service files.

Example

services/authService.js

services/appointmentService.js

services/doctorService.js

services/analyticsService.js

Keep all endpoints centralized.

---------------------------------------------------------------------------

# LOADING STATES

Every async operation should display:

Loading spinner

Skeleton loader

Progress indicator

Avoid blank screens.

---------------------------------------------------------------------------

# ERROR HANDLING

Display friendly messages.

Never expose backend errors directly.

Examples:

"Network Error"

"Session Expired"

"Something went wrong"

"Please try again."

---------------------------------------------------------------------------

# FORM VALIDATION

Every form should validate:

Required fields

Email

Phone number

Password strength

Date selection

Invalid input should be highlighted immediately.

---------------------------------------------------------------------------

# AUTHENTICATION FLOW

User opens Login

↓

Validate input

↓

Call Login API

↓

Receive JWT

↓

Store token securely

↓

Update Auth Context

↓

Redirect to Dashboard

Never expose protected pages without authentication.

---------------------------------------------------------------------------

# DASHBOARD DESIGN

Each dashboard should be modular.

Patient Dashboard

Appointments

Doctors

Notifications

Medical Records

Queue Position

------------------------------------

Doctor Dashboard

Appointments

Patients

Availability

Analytics

Notifications

------------------------------------

Hospital Dashboard

Doctors

Departments

Appointments

Queues

Reports

------------------------------------

Admin Dashboard

Users

Hospitals

System Analytics

Settings

Reports

---------------------------------------------------------------------------

# REUSABLE COMPONENTS

Always reuse:

Buttons

Inputs

Cards

Tables

Modals

Forms

Dropdowns

Loaders

Pagination

Search

Avoid creating duplicate UI elements.

---------------------------------------------------------------------------

# ACCESSIBILITY

Buttons should have labels.

Forms should support keyboard navigation.

Images should have alt text.

Maintain sufficient color contrast.

---------------------------------------------------------------------------

# PERFORMANCE

Lazy-load large pages.

Memoize expensive computations.

Avoid unnecessary re-renders.

Optimize images.

Keep bundle size reasonable.

---------------------------------------------------------------------------

# CODE STYLE

Prefer functional components.

Use hooks.

Avoid class components.

Use meaningful variable names.

Keep JSX readable.

Remove unused imports.

Avoid deeply nested JSX.

---------------------------------------------------------------------------

# FRONTEND TESTING WORKFLOW

Whenever changes are made:

1.

Install dependencies if needed.

2.

Run:

npm run dev

3.

Fix build errors.

4.

Open the page.

5.

Test navigation.

6.

Test forms.

7.

Test API calls.

8.

Fix any UI issues.

Repeat until the frontend runs without errors.

---------------------------------------------------------------------------

# DEBUGGING PRIORITY

Gemini should solve frontend issues in this order:

1.

Syntax errors

2.

Import errors

3.

Dependency issues

4.

Routing issues

5.

Build errors

6.

API integration

7.

State management

8.

UI rendering

9.

Responsiveness

10.

Performance

---------------------------------------------------------------------------

# FRONTEND DEVELOPMENT RULES

Never recreate the frontend.

Never redesign existing pages unless requested.

Never remove working components.

Prefer fixing over replacing.

Reuse components whenever possible.

Preserve consistent UI and UX.

Explain significant UI changes before applying them.

---------------------------------------------------------------------------

# MODULE COMPLETION CRITERIA

A frontend module is complete only if:

✓ Vite starts successfully

✓ No build errors

✓ No runtime errors

✓ Navigation works

✓ Components render correctly

✓ Forms function correctly

✓ API integration works

✓ Responsive layout is preserved

✓ Existing UI remains consistent

Only after these checks pass should Gemini move to the next frontend module.

# END OF PART 4

# ============================================================================
# PART 5
# DATABASE DESIGN, API CONTRACTS, AUTHENTICATION &
# FRONTEND-BACKEND INTEGRATION
# ============================================================================

# DATABASE OBJECTIVE

The database must be scalable,
normalized where practical,
easy to maintain,
and suitable for future multi-hospital deployment.

MongoDB Atlas is the primary database.

Never hardcode database credentials.

Always use environment variables.

---------------------------------------------------------------------------

# DATABASE PRINCIPLES

Avoid duplicate information.

Use ObjectId references whenever relationships exist.

Enable timestamps.

Validate required fields.

Use indexes on frequently queried fields.

Prefer reusable schemas.

Never store sensitive information in plain text.

---------------------------------------------------------------------------

# COLLECTIONS

VisionForge should eventually contain collections such as:

Users

Patients

Doctors

Hospitals

Departments

Appointments

Queues

Notifications

MedicalRecords

Feedback

AIRequests

Analytics

Settings

Future collections may be added when required.

---------------------------------------------------------------------------

# USER MODEL

Fields

_id

name

email

phone

password

role

profileImage

status

createdAt

updatedAt

Roles

Patient

Doctor

Hospital

Admin

Passwords must always be hashed.

---------------------------------------------------------------------------

# PATIENT MODEL

Patient references User.

Example fields

userId

gender

dateOfBirth

bloodGroup

address

medicalHistory

emergencyContact

---------------------------------------------------------------------------

# DOCTOR MODEL

Doctor references User.

Example fields

userId

specialization

hospitalId

departmentId

experience

consultationFee

availability

rating

---------------------------------------------------------------------------

# HOSPITAL MODEL

Example fields

name

address

city

state

contactNumber

email

departments

logo

---------------------------------------------------------------------------

# APPOINTMENT MODEL

Example fields

patientId

doctorId

hospitalId

appointmentDate

timeSlot

status

tokenNumber

consultationType

Statuses

Pending

Confirmed

Completed

Cancelled

---------------------------------------------------------------------------

# QUEUE MODEL

Example fields

hospitalId

doctorId

currentToken

estimatedWaitingTime

activePatients

lastUpdated

---------------------------------------------------------------------------

# NOTIFICATION MODEL

Example fields

userId

title

message

type

isRead

createdAt

---------------------------------------------------------------------------

# AI REQUEST MODEL

Example fields

patientId

symptoms

prediction

recommendedDoctor

confidence

processingTime

---------------------------------------------------------------------------

# DATABASE RELATIONSHIPS

User

↓

Patient

↓

Appointments

↓

Doctor

↓

Hospital

↓

Department

↓

Queue

Use references instead of duplicated data whenever possible.

---------------------------------------------------------------------------

# API DESIGN PRINCIPLES

Follow REST conventions.

Maintain consistent naming.

Use nouns instead of verbs.

Examples

GET /api/doctors

GET /api/doctors/:id

POST /api/doctors

PUT /api/doctors/:id

DELETE /api/doctors/:id

Avoid inconsistent endpoint names.

---------------------------------------------------------------------------

# AUTHENTICATION API

POST

/api/auth/register

POST

/api/auth/login

POST

/api/auth/logout

GET

/api/auth/profile

PUT

/api/auth/profile

Password reset endpoints may be added later.

---------------------------------------------------------------------------

# PATIENT API

GET

/api/patients

GET

/api/patients/:id

POST

/api/patients

PUT

/api/patients/:id

DELETE

/api/patients/:id

---------------------------------------------------------------------------

# DOCTOR API

GET

/api/doctors

GET

/api/doctors/:id

POST

/api/doctors

PUT

/api/doctors/:id

DELETE

/api/doctors/:id

---------------------------------------------------------------------------

# HOSPITAL API

GET

/api/hospitals

GET

/api/hospitals/:id

POST

/api/hospitals

PUT

/api/hospitals/:id

DELETE

/api/hospitals/:id

---------------------------------------------------------------------------

# APPOINTMENT API

GET

/api/appointments

POST

/api/appointments

PUT

/api/appointments/:id

DELETE

/api/appointments/:id

---------------------------------------------------------------------------

# QUEUE API

GET

/api/queues

GET

/api/queues/:doctorId

PUT

/api/queues/update

---------------------------------------------------------------------------

# NOTIFICATION API

GET

/api/notifications

PUT

/api/notifications/read

DELETE

/api/notifications/:id

---------------------------------------------------------------------------

# AI API (Future)

POST

/api/ai/symptom-analysis

POST

/api/ai/doctor-recommendation

GET

/api/ai/queue-prediction

These endpoints may initially return mock data until AI services are integrated.

---------------------------------------------------------------------------

# RESPONSE FORMAT

Success

{
  "success": true,
  "message": "Operation completed successfully.",
  "data": {}
}

Failure

{
  "success": false,
  "message": "Operation failed.",
  "errors": []
}

Maintain the same response structure across all endpoints.

---------------------------------------------------------------------------

# HTTP STATUS CODES

200

Success

201

Created

204

No Content

400

Bad Request

401

Unauthorized

403

Forbidden

404

Not Found

409

Conflict

422

Validation Error

500

Internal Server Error

---------------------------------------------------------------------------

# JWT AUTHENTICATION FLOW

Register

↓

Hash Password

↓

Store User

↓

Login

↓

Verify Password

↓

Generate JWT

↓

Return Token

↓

Frontend Stores Token

↓

Authenticated API Requests

Never expose protected resources without verifying the JWT.

---------------------------------------------------------------------------

# FRONTEND-BACKEND INTEGRATION

The frontend must never hardcode API URLs.

Store the API base URL in configuration.

All requests should be made through service files.

Do not duplicate API logic across components.

---------------------------------------------------------------------------

# SERVICE LAYER

Examples

authService

doctorService

patientService

hospitalService

appointmentService

queueService

notificationService

analyticsService

Each service is responsible for communicating with one logical backend area.

---------------------------------------------------------------------------

# ERROR HANDLING

Backend should return meaningful errors.

Frontend should convert technical errors into user-friendly messages.

Avoid exposing internal implementation details.

---------------------------------------------------------------------------

# FILE UPLOADS

Future support includes:

Profile images

Hospital logos

Medical reports

Prescription uploads

Use Cloudinary or another managed storage provider.

Do not store uploaded files directly in the repository.

---------------------------------------------------------------------------

# MODULE COMPLETION CRITERIA

An integration module is complete only if:

✓ Database models are valid

✓ Relationships are consistent

✓ APIs follow agreed contracts

✓ Authentication works

✓ Frontend services match backend endpoints

✓ Responses use a consistent format

✓ Errors are handled cleanly

Only after these checks pass should Gemini move to the next module.

# END OF PART 5

# ============================================================================
# PART 6
# AI MODULES, MACHINE LEARNING ARCHITECTURE &
# INTELLIGENT HEALTHCARE SERVICES
# ============================================================================

# AI OBJECTIVE

VisionForge is not just a hospital appointment system.

Artificial Intelligence is the core differentiator of VisionForge.

Every AI module should help patients make better healthcare decisions,
reduce waiting time, improve hospital efficiency,
and provide actionable insights.

AI modules must be modular, independently testable,
and replaceable without affecting the rest of the application.

---------------------------------------------------------------------------

# AI DESIGN PRINCIPLES

AI should never replace doctors.

AI should assist doctors and patients.

All AI outputs should be treated as recommendations,
not medical diagnoses.

The application must clearly communicate this to users.

---------------------------------------------------------------------------

# AI ARCHITECTURE

Frontend

↓

Backend API

↓

AI Service Layer

↓

Machine Learning Models

↓

Prediction Results

↓

Backend Response

↓

Frontend Dashboard

The AI service should remain independent from business logic.

---------------------------------------------------------------------------

# AI SERVICE STRUCTURE

backend/

src/

services/

ai/

symptomAnalysisService.js

doctorRecommendationService.js

queuePredictionService.js

appointmentPredictionService.js

analyticsService.js

futureAgentService.js

Each AI feature should be implemented as an independent service.

---------------------------------------------------------------------------

# AI MODULES

The project should support the following AI modules.

1.

Symptom Analysis

2.

Doctor Recommendation

3.

Queue Waiting Time Prediction

4.

Hospital Load Prediction

5.

Appointment Recommendation

6.

Department Recommendation

7.

Hospital Recommendation

8.

Analytics Dashboard

9.

Future Agentic AI Assistant

---------------------------------------------------------------------------

# MODULE 1

SYMPTOM ANALYSIS

Purpose

Help users identify the most appropriate medical department
based on symptoms.

Example

Symptoms

↓

AI Analysis

↓

Possible Departments

↓

Recommended Doctors

↓

Appointment Booking

The output should include a confidence score.

Never claim certainty.

---------------------------------------------------------------------------

# MODULE 2

DOCTOR RECOMMENDATION

The recommendation engine should consider:

Doctor Specialization

Hospital

Distance

Consultation Fee

Availability

Current Queue

Doctor Rating

Patient Preferences

The recommendation algorithm should be configurable.

---------------------------------------------------------------------------

# MODULE 3

QUEUE PREDICTION

Estimate waiting time.

Possible inputs

Current Queue Length

Average Consultation Time

Doctor Availability

Break Times

Hospital Load

Output

Estimated Waiting Time

Current Queue Position

Predicted Consultation Time

---------------------------------------------------------------------------

# MODULE 4

HOSPITAL LOAD PREDICTION

Predict busy hours.

Possible Inputs

Historical appointments

Doctor schedules

Holiday calendar

Day of week

Time of day

Output

Expected crowd level

Expected waiting time

Recommended visit time

---------------------------------------------------------------------------

# MODULE 5

APPOINTMENT RECOMMENDATION

Recommend

Hospital

Doctor

Department

Date

Time Slot

based on

Availability

Waiting Time

User Preferences

---------------------------------------------------------------------------

# MODULE 6

ANALYTICS

Provide intelligent insights.

Examples

Average Waiting Time

Daily Appointments

Doctor Utilization

Hospital Utilization

Department Load

Peak Hours

Appointment Trends

Cancelled Appointments

---------------------------------------------------------------------------

# AI API DESIGN

Examples

POST

/api/ai/symptom-analysis

POST

/api/ai/doctor-recommendation

GET

/api/ai/queue-prediction

GET

/api/ai/hospital-load

GET

/api/ai/analytics

Maintain consistent API responses.

---------------------------------------------------------------------------

# AI RESPONSE FORMAT

{
  "success": true,
  "prediction": {},
  "confidence": 0.91,
  "recommendations": [],
  "message": "Recommendation generated successfully."
}

---------------------------------------------------------------------------

# MACHINE LEARNING ROADMAP

Initial Version

Rule-Based Logic

↓

Weighted Scoring

↓

Machine Learning Models

↓

Advanced Deep Learning

↓

Agentic AI

Gemini should not over-engineer early versions.

Implement simple approaches first,
then upgrade.

---------------------------------------------------------------------------

# MODEL RECOMMENDATIONS

Symptom Analysis

Rule Engine (Initial)

Doctor Recommendation

Weighted Scoring

Queue Prediction

Random Forest Regressor

Peak Hour Prediction

Time Series Forecasting

Hospital Analytics

Classification & Regression Models

These are recommendations and may evolve.

---------------------------------------------------------------------------

# FUTURE AGENTIC AI

VisionForge will eventually include an AI assistant.

Responsibilities

Understand patient queries.

Ask follow-up questions.

Analyze symptoms.

Recommend department.

Recommend doctor.

Book appointments.

Track queues.

Provide reminders.

Explain hospital services.

The AI assistant should integrate with existing APIs.

---------------------------------------------------------------------------

# AI SAFETY RULES

Never diagnose diseases.

Never prescribe medicines.

Never replace professional medical advice.

Always display a disclaimer.

Always encourage consultation with qualified healthcare professionals.

---------------------------------------------------------------------------

# FRONTEND AI INTEGRATION

AI responses should be displayed using:

Cards

Confidence Indicators

Recommendation Lists

Charts

Queue Timelines

Prediction Graphs

Never expose raw model output.

---------------------------------------------------------------------------

# BACKEND AI RULES

AI services should be isolated.

Business logic must remain separate.

AI modules should be replaceable.

Support mock responses during early development.

---------------------------------------------------------------------------

# DEVELOPMENT STRATEGY

Phase 1

Mock Responses

↓

Phase 2

Rule-Based Logic

↓

Phase 3

Machine Learning Integration

↓

Phase 4

Agentic AI

Do not skip phases.

---------------------------------------------------------------------------

# AI TESTING

Verify

API response

Prediction format

Error handling

Fallback behavior

Confidence values

Response time

User interface rendering

---------------------------------------------------------------------------

# AI MODULE COMPLETION CRITERIA

An AI module is complete only if:

✓ API works

✓ Response format is consistent

✓ Frontend displays results correctly

✓ Fallback response exists

✓ Errors are handled gracefully

✓ AI logic is isolated from business logic

Only after these checks pass should Gemini move to another AI module.

# END OF PART 6

# ============================================================================
# PART 7
# TESTING, DEBUGGING, GIT WORKFLOW, DEPLOYMENT &
# DAILY DEVELOPMENT PROCESS
# Version 1.0
# ============================================================================

# DEVELOPMENT PHILOSOPHY

VisionForge is developed incrementally.

Every development session should improve the project.

Never attempt to complete the entire project in one session.

Small improvements produce better quality.

---------------------------------------------------------------------------

# DAILY DEVELOPMENT RULE

Every Gemini session must have ONE objective only.

Examples

Backend Authentication

Complaint API

Doctor Dashboard

Patient Dashboard

Notification System

Queue Prediction

Analytics

Image Upload

Never combine unrelated modules.

---------------------------------------------------------------------------

# SESSION WORKFLOW

STEP 1

Read GEMINI.md

↓

STEP 2

Understand today's assigned module

↓

STEP 3

Inspect only related files

↓

STEP 4

Identify the root cause

↓

STEP 5

Explain the issue briefly

↓

STEP 6

Implement the solution

↓

STEP 7

Build the project

↓

STEP 8

Run the application

↓

STEP 9

Test the module

↓

STEP 10

Stop after the module is complete

Do not continue into unrelated work.

---------------------------------------------------------------------------

# FILE MODIFICATION RULES

Before modifying a file:

Understand its purpose.

Check its dependencies.

Check where it is used.

Avoid unnecessary changes.

If multiple files require modification,
change the minimum number necessary.

---------------------------------------------------------------------------

# BUILD WORKFLOW

Frontend

npm install

↓

npm run dev

↓

Resolve errors

↓

Repeat

------------------------------------

Backend

npm install

↓

npm run dev

(or npm start)

↓

Resolve errors

↓

Repeat

---------------------------------------------------------------------------

# DEBUGGING STRATEGY

Always debug in this order:

1

Syntax Errors

↓

2

Dependency Errors

↓

3

Import Errors

↓

4

Configuration Errors

↓

5

Environment Variables

↓

6

Database Connection

↓

7

Authentication

↓

8

API Endpoints

↓

9

Frontend Integration

↓

10

Logic Errors

↓

11

Performance

Never skip directly to performance optimization.

---------------------------------------------------------------------------

# ERROR ANALYSIS

When an error occurs:

Read the complete error.

Identify the file.

Identify the line number.

Determine the root cause.

Fix the root cause.

Run the application again.

Repeat until resolved.

Never hide errors.

Never suppress errors without understanding them.

---------------------------------------------------------------------------

# TESTING CHECKLIST

Every completed module should pass:

✓ Build Success

✓ No Runtime Errors

✓ No Console Errors

✓ API Working

✓ UI Working

✓ Database Working

✓ Authentication Working

✓ Error Handling Working

Only then is the module considered complete.

---------------------------------------------------------------------------

# FRONTEND TESTING

Verify:

Pages load

Navigation works

Buttons respond

Forms validate

API calls succeed

Responsive layout

Dark/Light mode (if implemented)

Loading indicators

Error messages

---------------------------------------------------------------------------

# BACKEND TESTING

Verify:

Server starts

MongoDB connects

Routes register

Controllers execute

Services work

Authentication

Authorization

Validation

Error middleware

---------------------------------------------------------------------------

# API TESTING

Every endpoint should verify:

Correct HTTP method

Authentication

Authorization

Input validation

Expected response

Error response

Status code

---------------------------------------------------------------------------

# DATABASE TESTING

Verify:

Connection

CRUD operations

Indexes

Relationships

Validation

Unique constraints

---------------------------------------------------------------------------

# GIT WORKFLOW

Before development:

git pull

------------------------------------

After successful module:

git add .

git commit -m "Module: Backend Authentication completed"

git push

Never leave completed work uncommitted.

---------------------------------------------------------------------------

# BRANCH STRATEGY

main

Production-ready code

develop

Integration branch

feature/backend-auth

feature/doctor-dashboard

feature/analytics

feature/queue-ai

Develop features independently before merging.

---------------------------------------------------------------------------

# COMMIT MESSAGE STYLE

Good Examples

Backend authentication completed

Doctor dashboard implemented

MongoDB connection fixed

Queue prediction API added

Frontend routing fixed

Avoid vague messages like:

Update

Fix

Changes

---------------------------------------------------------------------------

# CODE REVIEW CHECKLIST

Before considering work complete:

No duplicate code

Readable code

Meaningful names

No unused imports

No commented-out dead code

Consistent formatting

Minimal complexity

---------------------------------------------------------------------------

# PERFORMANCE GUIDELINES

Frontend

Lazy loading

Code splitting

Image optimization

Memoization when needed

Backend

Pagination

Database indexes

Lean queries

Caching (future)

Avoid unnecessary database requests

---------------------------------------------------------------------------

# SECURITY CHECKLIST

Never commit:

.env

API Keys

JWT Secret

Passwords

Cloudinary Secrets

Mongo URI with credentials

Always validate input.

Always hash passwords.

Always verify JWT.

---------------------------------------------------------------------------

# DOCUMENTATION RULE

Whenever a significant feature is completed:

Update README.md if setup changes.

Update API documentation if endpoints change.

Keep GEMINI.md aligned with architectural changes.

---------------------------------------------------------------------------

# DEPLOYMENT ROADMAP

Development

↓

Testing

↓

Staging

↓

Production

Never deploy untested code.

---------------------------------------------------------------------------

# FUTURE DEPLOYMENT

Frontend

Vercel / Netlify

Backend

Render / Railway / Azure / AWS

Database

MongoDB Atlas

Media

Cloudinary

CI/CD

GitHub Actions (future)

Docker

Future enhancement

---------------------------------------------------------------------------

# DAILY END CHECKLIST

Before ending a session:

✓ Build passes

✓ Server starts

✓ Frontend runs

✓ No new errors introduced

✓ Git commit created

✓ Code pushed (if appropriate)

✓ Documentation updated if necessary

Stop only after today's objective is complete.

---------------------------------------------------------------------------

# GEMINI BEHAVIOR RULES

Gemini must:

Read before modifying.

Think before coding.

Fix the root cause.

Preserve architecture.

Preserve UI.

Reuse components.

Reuse services.

Avoid duplication.

Avoid breaking changes.

Explain major modifications.

Stop after completing today's assigned module.

---------------------------------------------------------------------------

# PROJECT SUCCESS CRITERIA

VisionForge is considered production-ready only when:

✓ Frontend stable

✓ Backend stable

✓ MongoDB connected

✓ Authentication complete

✓ APIs documented

✓ Dashboards functional

✓ Queue system operational

✓ AI modules integrated (or safely stubbed)

✓ Error handling complete

✓ Documentation updated

✓ Repository organized

✓ Code reviewed

✓ Deployment successful

# ============================================================================
# END OF PART 7
# ============================================================================

# ============================================================================
# PART 8
# LONG-TERM ROADMAP, SCALABILITY, SOFTWARE ENGINEERING &
# PROJECT GOVERNANCE
# Version 1.0
# ============================================================================

# VISION

VisionForge is not just a hackathon project.

VisionForge is being developed as a production-ready healthcare platform.

Every implementation decision should support long-term scalability.

Never optimize only for the demo.

---------------------------------------------------------------------------

# PRODUCT GOALS

VisionForge aims to become

• AI Healthcare Assistant

• Multi-Hospital Appointment Platform

• Intelligent Queue Management System

• Healthcare Analytics Platform

• Doctor Recommendation Platform

• Patient Engagement Platform

• Hospital Administration Platform

• Future Agentic AI Healthcare Platform

---------------------------------------------------------------------------

# ENGINEERING PHILOSOPHY

Every feature must satisfy

Correctness

↓

Readability

↓

Maintainability

↓

Scalability

↓

Performance

↓

Security

↓

User Experience

Never sacrifice architecture for speed.

---------------------------------------------------------------------------

# SCALABILITY PRINCIPLES

The system should support

1 Hospital

↓

10 Hospitals

↓

100 Hospitals

↓

1000 Hospitals

without major architectural changes.

Never assume there will only be one hospital.

---------------------------------------------------------------------------

# MULTI-HOSPITAL DESIGN

Each hospital should have

Doctors

Departments

Patients

Appointments

Queues

Reports

Notifications

Analytics

Hospitals must remain isolated from one another.

---------------------------------------------------------------------------

# FUTURE USER ROLES

Current

Patient

Doctor

Hospital

Admin

Future

Receptionist

Nurse

Lab Technician

Pharmacist

Emergency Staff

Super Admin

Health Department

---------------------------------------------------------------------------

# FEATURE ROADMAP

Phase 1

Authentication

Appointments

Doctor Search

Hospital Search

Queue Tracking

Dashboards

--------------------------------------

Phase 2

Doctor Recommendation

Queue Prediction

Hospital Analytics

Notifications

Reports

--------------------------------------

Phase 3

AI Symptom Analysis

Medical History

Health Insights

Patient Timeline

--------------------------------------

Phase 4

Agentic AI

Voice Assistant

Chat Assistant

Hospital Automation

Predictive Healthcare

---------------------------------------------------------------------------

# MOBILE APPLICATION

Future support

Android

iOS

React Native or Flutter

Mobile application should consume the same APIs.

Never duplicate backend logic.

---------------------------------------------------------------------------

# API VERSIONING

Support

/api/v1/

Future

/api/v2/

Avoid breaking clients.

---------------------------------------------------------------------------

# NOTIFICATION ROADMAP

Future support

Push Notifications

Email

SMS

WhatsApp

Appointment Reminders

Emergency Alerts

Queue Updates

---------------------------------------------------------------------------

# ANALYTICS ROADMAP

Patient Analytics

Hospital Analytics

Doctor Performance

Queue Statistics

Peak Hours

Appointment Trends

Department Usage

Prediction Accuracy

---------------------------------------------------------------------------

# AI ROADMAP

Version 1

Rule-Based

↓

Version 2

Machine Learning

↓

Version 3

Deep Learning

↓

Version 4

Agentic AI

Do not skip directly to advanced AI.

---------------------------------------------------------------------------

# SECURITY ROADMAP

Future enhancements

Rate Limiting

Refresh Tokens

Role-Based Permissions

Audit Logs

Encryption

Backup Strategy

Disaster Recovery

---------------------------------------------------------------------------

# PERFORMANCE ROADMAP

Future improvements

Caching

Redis

Lazy Loading

Database Optimization

Load Balancing

Horizontal Scaling

CDN

Background Jobs

---------------------------------------------------------------------------

# CODE QUALITY STANDARDS

Every new feature should

Follow existing architecture

Be modular

Be reusable

Be documented

Be testable

Avoid duplication

---------------------------------------------------------------------------

# DOCUMENTATION

Maintain

README

API Documentation

Database Documentation

Architecture Documentation

Deployment Guide

Developer Guide

Update documentation whenever architecture changes.

---------------------------------------------------------------------------

# TESTING ROADMAP

Future testing

Unit Tests

Integration Tests

API Tests

UI Tests

Performance Tests

Security Tests

End-to-End Tests

---------------------------------------------------------------------------

# DEPLOYMENT ROADMAP

Development

↓

Testing

↓

Staging

↓

Production

Future Hosting

Frontend

Vercel

Backend

Render

Railway

Azure

AWS

Database

MongoDB Atlas

Storage

Cloudinary

---------------------------------------------------------------------------

# MONITORING

Future

Application Logs

Error Tracking

Performance Monitoring

Health Checks

Usage Analytics

---------------------------------------------------------------------------

# TEAM DEVELOPMENT

When multiple developers contribute

Follow Git branches

Review Pull Requests

Avoid direct commits to main

Maintain coding standards

Resolve merge conflicts carefully

---------------------------------------------------------------------------

# GEMINI OPERATING RULES

Gemini should act as

Software Architect

Backend Engineer

Frontend Engineer

Code Reviewer

QA Engineer

Technical Mentor

Gemini should not behave as a code generator.

Gemini should understand the project before implementing changes.

---------------------------------------------------------------------------

# CHANGE MANAGEMENT

Before changing architecture

Understand existing implementation.

Identify affected modules.

Minimize breaking changes.

Update documentation.

Verify functionality.

---------------------------------------------------------------------------

# FEATURE COMPLETION CHECKLIST

Every completed feature must satisfy

✓ Backend Working

✓ Frontend Working

✓ API Tested

✓ Database Updated

✓ Authentication Verified

✓ Error Handling Added

✓ Documentation Updated

✓ No Build Errors

✓ No Runtime Errors

✓ UI Consistent

---------------------------------------------------------------------------

# RELEASE CHECKLIST

Before every release

✓ Build Successful

✓ Backend Running

✓ Frontend Running

✓ MongoDB Connected

✓ Authentication Working

✓ APIs Tested

✓ Dashboards Working

✓ AI Modules Stable

✓ Documentation Updated

✓ Git Repository Clean

---------------------------------------------------------------------------

# SUCCESS METRICS

VisionForge is considered successful when

Patients can easily book appointments.

Doctors can manage schedules efficiently.

Hospitals reduce waiting time.

Administrators gain meaningful insights.

AI recommendations assist users responsibly.

The platform remains scalable, secure, and maintainable.

---------------------------------------------------------------------------

# FINAL GEMINI INSTRUCTION

Whenever a new development session begins:

1. Read GEMINI.md completely.
2. Inspect only the relevant module.
3. Explain the current issue.
4. Implement the smallest correct solution.
5. Build the project.
6. Test the module.
7. Verify functionality.
8. Update documentation if needed.
9. Stop after today's assigned objective is complete.

Never attempt to rebuild the entire project in one session.

# ============================================================================
# END OF PART 8
# ============================================================================

