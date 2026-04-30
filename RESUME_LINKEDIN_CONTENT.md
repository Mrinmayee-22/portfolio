# Mrinmayee Gokhale — Resume & LinkedIn Content

---

## RESUME PROJECT BULLETS

### 1. Diabetic Retinopathy Classification (Healthcare AI · CNN)
- Developed a multi-class CNN diagnostic system to grade diabetic retinopathy severity across 5 stages from retinal fundus images, targeting early-stage detection at clinical scale
- Applied CLAHE preprocessing and augmentation (flip, zoom, rotation) to address class imbalance; optimized for Quadratic Weighted Kappa evaluation metric
- Integrated Grad-CAM heatmap visualization to produce clinically interpretable lesion localization for model explainability
- **Stack:** Python · TensorFlow/Keras · CNN · OpenCV · Medical Imaging

---

### 2. MedTermQuest — Medical NLP System (NLP · Transformers · Healthcare)
- Built a clinical NLP pipeline for Named Entity Recognition (NER) over medical text, extracting symptoms, diagnoses, medications, and procedures with high precision/recall
- Fine-tuned BioBERT/ClinicalBERT for domain-specific medical entity classification and semantic concept disambiguation
- Implemented vector-embedding-based semantic search to map extracted entities to standardized ontologies (SNOMED/ICD-10)
- **Stack:** Python · BioBERT · HuggingFace · spaCy · NER · Transformers

---

### 3. Automated EDA System (Data Engineering · Research)
- Engineered a zero-intervention EDA pipeline that auto-generates statistical summaries, distribution plots, correlation heatmaps, and data quality scores from raw tabular datasets
- Outputs structured markdown/PDF analytical reports; methodology documented in a published/submitted research paper
- Reduced manual exploratory analysis time by automating the full profiling workflow end-to-end
- **Stack:** Python · Pandas · Seaborn · Plotly · Scipy · Automation

---

### 4. Traffic Flow Optimization Framework (RL · ML · Smart Systems)
- Designed a multi-model AI system for adaptive urban traffic management under Indian road conditions, combining RL, time series forecasting, and computer vision
- Implemented Deep Q-Network (DQN) agent with CityFlow simulator for dynamic traffic signal control; trained LSTM + LightGBM ensemble for congestion prediction
- Integrated YOLOv5 for real-time vehicle detection and BERT-based NLP for emergency/event detection via Twitter alerts
- Deployed interactive Streamlit dashboard with congestion heatmaps, signal control panel, and A*-based optimal route suggestions
- **Stack:** Python · LSTM · LightGBM · YOLOv5 · CityFlow · DQN · BERT · Streamlit

---

### 5. Real Estate Price Prediction System (End-to-End ML Pipeline)
- Built a production-style ML pipeline for residential property price prediction with full preprocessing, modeling, and explainability stages
- Applied KNN imputation for missing values; benchmarked Linear, Ridge, Lasso, Random Forest, and XGBoost regressors with k-fold cross-validation
- Performed hyperparameter tuning via GridSearchCV/Optuna; used SHAP values to deliver interpretable, business-oriented feature importance insights
- **Stack:** Python · Scikit-learn · XGBoost · KNN Imputation · SHAP · Pandas

---

### 6. AI-Based Crop Advisory System (AgriTech · ML · IoT)
- Developed an ML-driven advisory platform recommending optimal crop types based on soil NPK, pH, humidity, and rainfall using Random Forest + SVM classifiers
- Integrated IoT sensor simulation layer for real-time environmental data ingestion and integrated a rule-based + ML chatbot for natural language agronomic queries
- Built a mobile-friendly prototype for field deployment in low-connectivity agricultural environments
- **Stack:** Python · Scikit-learn · Flask · IoT Simulation · Chatbot · Mobile UI

---

### 7. Live System Sentinel — Java Real-Time Monitoring (Systems Engineering)
- Architected a real-time system monitoring platform using Java OOP principles with modular components for metric collection, alert management, and visualization
- Implemented a multi-threaded polling engine with configurable sampling intervals tracking CPU, memory, disk I/O, and process health
- Built a dynamic dashboard with live time-series charts; alert system triggers notifications on anomalous resource utilization
- **Stack:** Java · OOP · Multithreading · JavaFX/Swing · System Design

---

### 8. Stock Price Prediction System (Finance · Time Series)
- Built an LSTM-based time series forecasting model for stock closing price prediction using sliding window sequences over historical OHLCV market data
- Engineered technical indicators (MA, RSI, MACD) as additional input features; evaluated with RMSE/MAE and visualized multi-ticker prediction curves
- **Stack:** Python · LSTM · TensorFlow · Pandas · Time Series

---

### Portfolio Website (Full-Stack · Deployment)
- Designed and deployed a professional portfolio website using Flask (Python), SQLite, and vanilla JS featuring project showcases, a contact form with database storage, and secure resume download — deployed on Render
- **Stack:** Python · Flask · SQLite · HTML/CSS · JavaScript · Render

---

## LINKEDIN PROJECT DESCRIPTIONS

### Diabetic Retinopathy Classification
Developed a deep learning system for automated grading of diabetic retinopathy from retinal fundus images using a custom CNN architecture. The model classifies severity across 5 stages, uses Grad-CAM for clinical explainability, and is designed as a scalable screening tool for low-resource healthcare settings. Built with Python, TensorFlow, and OpenCV.

### MedTermQuest — Medical NLP System
Built a clinical text processing pipeline leveraging fine-tuned BioBERT for named entity recognition over medical corpora. The system extracts and disambiguates clinical entities (symptoms, diagnoses, drugs, procedures), maps them to SNOMED/ICD-10 ontologies via semantic search, and enables downstream clinical decision support. Stack: Python, HuggingFace Transformers, spaCy.

### Automated EDA System (Research Paper)
Designed an end-to-end automated exploratory data analysis pipeline that generates structured reports — statistical summaries, distribution plots, correlation heatmaps, and data quality scores — with zero manual input. The methodology is documented in an associated research paper. Built with Python, Pandas, Plotly, and Scipy.

### Traffic Flow Optimization Framework
A multi-model intelligent traffic management system for Indian urban roads. Combines a Deep Q-Network agent for adaptive signal control (CityFlow), LSTM + LightGBM for congestion prediction, YOLOv5 for vehicle detection, and BERT-based NLP for real-time event alerts. Features a live Streamlit dashboard with A*-based routing. Open source on GitHub.

### Real Estate Price Prediction System
End-to-end ML pipeline for residential property price prediction: KNN imputation, multi-model benchmarking (XGBoost, Random Forest, Ridge), hyperparameter tuning, and SHAP-based explainability. Designed for business-oriented, interpretable outputs. Stack: Python, Scikit-learn, XGBoost, SHAP.

### AI-Based Crop Advisory System
ML-driven precision agriculture platform that recommends optimal crops based on soil and weather data (Random Forest + SVM). Includes an IoT simulation layer, a natural language advisory chatbot, and a mobile-friendly prototype for field use. Stack: Python, Scikit-learn, Flask, IoT.

### Live System Sentinel
Java-based real-time system monitoring platform with a multi-threaded polling engine tracking CPU, memory, disk, and process health. Features live time-series dashboards and threshold-based alerting. Built with strong OOP design principles and multithreading. Stack: Java, JavaFX/Swing.

---

## LINKEDIN "ABOUT" SECTION

I'm a third-year B.Tech student specializing in Artificial Intelligence & Data Science at MIT World Peace University, Pune (CGPA: 9.05), with a focus on building end-to-end intelligent systems that solve real problems.

My work sits at the intersection of Healthcare AI, NLP, and applied machine learning — from diagnosing diabetic retinopathy with CNNs, to extracting clinical entities from medical text with fine-tuned transformers, to building automated data analysis pipelines backed by a research paper.

Beyond healthcare, I've built a reinforcement learning-based traffic optimization framework (LSTM + YOLOv5 + DQN), a full ML pipeline for real estate price prediction, and an AI-driven crop advisory system — covering the spectrum from research to applied engineering.

On the software side, I've architected a real-time Java monitoring system demonstrating systems design depth, and I'm comfortable across the full ML stack: from data wrangling and feature engineering to model training, evaluation, and deployment.

Outside of technical work, I serve as HR Associate at the Society of Women Engineers (SWE) and am a member of the Computer Society of India (CSI).

I'm actively seeking AI / Data Science / Software Engineering internship opportunities for 2025. If you're working on something interesting in AI, healthcare tech, or data systems — let's connect.

📩 mru.n.mai2206@gmail.com
🔗 github.com/Mrinmayee-22

---

## STRATEGIC ORDERING (for Resume & LinkedIn Featured)

**Top 3 (lead with these):**
1. Diabetic Retinopathy Classification — signals Healthcare AI depth
2. MedTermQuest — NLP + Transformers = rare for undergrads
3. Automated EDA + Research Paper — proves academic + engineering credibility

**Middle tier:**
4. Traffic Optimization — shows RL + multi-model system design
5. Real Estate Prediction — end-to-end ML pipeline maturity

**Supporting:**
6. Crop Advisory — applied ML + IoT breadth
7. Live System Sentinel — SWE credibility (Java + systems)
8. Stock Prediction — solid, but list last (common project)
