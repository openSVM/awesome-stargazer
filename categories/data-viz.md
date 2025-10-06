[← Previous: Data Quality](data-quality.txt) | [🏠 Back to README](../README.md) | [Next: Debuggers →](debuggers.txt)

---

# DATA VIZ

**94 repositories**

---

## [plait-board/drawnix](https://github.com/plait-board/drawnix)

开源白板工具（SaaS），一体化白板，包含思维导图、流程图、自由画等。All in one open-source whiteboard tool with mind, flowchart, freehand and etc.

🔗 [https://github.com/plait-board/drawnix](https://github.com/plait-board/drawnix)

---

## [GongRzhe/Quickchart-MCP-Server](https://github.com/GongRzhe/Quickchart-MCP-Server)

A Model Context Protocol server for generating charts using QuickChart.io  . It allows you to create various types of charts through MCP tools.

🔗 [https://github.com/GongRzhe/Quickchart-MCP-Server](https://github.com/GongRzhe/Quickchart-MCP-Server)

---

## [e2b-dev/ai-analyst](https://github.com/e2b-dev/ai-analyst)

Open source AI analyst powered by E2B. Analyze your CSV files with Llama 3.1 and create interactive charts.

🔗 [https://github.com/e2b-dev/ai-analyst](https://github.com/e2b-dev/ai-analyst)

---

## [antvis/F2](https://github.com/antvis/F2)

📱📈An elegant, interactive and flexible charting library for mobile.

🔗 [https://github.com/antvis/F2](https://github.com/antvis/F2)

---

## [whoiskatrin/chart-gpt](https://github.com/whoiskatrin/chart-gpt)

AI tool to build charts based on text input

🔗 [https://github.com/whoiskatrin/chart-gpt](https://github.com/whoiskatrin/chart-gpt)

---

## [Canner/WrenAI](https://github.com/Canner/WrenAI)

⚡️ GenBI (Generative BI) queries any database in natural language, generates accurate SQL (Text-to-SQL), charts (Text-to-Chart), and AI-powered insights in seconds.

🔗 [https://github.com/Canner/WrenAI](https://github.com/Canner/WrenAI)

---

## [w0rmr1d3r/cloner](https://github.com/w0rmr1d3r/cloner)

A tool to clone efficiently all the repos in an organization

🔗 [https://github.com/w0rmr1d3r/cloner](https://github.com/w0rmr1d3r/cloner)

---

## [vkgnandhu177/Bayesian-Regression-and-Bitcoin](https://github.com/vkgnandhu177/Bayesian-Regression-and-Bitcoin)

# Bayesian-Regression-to-Predict-Bitcoin-Price-Variations Predicting the price variations of bitcoin, a virtual cryptographic currency. These predictions could be used as the foundation of a bitcoin trading strategy. To make these predictions, we will have to familiarize ourself with a machine learning technique, Bayesian Regression, and implement this technique in Python.  # Datasets We have the datasets in the data folder. The original raw data can be found here: http://api.bitcoincharts.com/v1/csv/. The datasets from this site have three attributes:   (1) time in epoch,   (2) price in USD per bitcoin, and   (3) bitcoin amount in a transaction (buy/sell).   However, only the first two attributes are relevant to this project.  To make the data to have evenly space records, we took all the records within a 20 second window and replaced it by a single record as the average of all the transaction prices in that window. Not every 20 second window had a record; therefore those missing entries were filled using the prices of the previous 20 observations and assuming a Gaussian distribution. The raw data that has been cleaned is given in the file dataset.csv  Finally, as discussed in the paper, the data was divided into a total of 9 different datasets. The whole dataset is partitioned into three equally sized (50 price variations in each) subsets: train1, train2, and test. The train sets are used for training a linear model, while the test set is for evaluation of the model. There are three csv files associated with each subset of data: *_90.csv, *_180.csv, and *_360.csv. In _90.csv, for example, each line represents a vector of length 90 where the elements are 30 minute worth of bitcoin price variations (since we have 20 second intervals) and a price variation in the 91st column. Similarly, the *_180.csv represents 60 minutes of prices and *_360.csv represents 120 minutes of prices.  # Project Requirements We are expected to implement the Bayesian Regression model to predict the future price variation of bitcoin as described in the reference paper. The main parts to focus on are Equation 6 and the Predicting Price Change section.  # Logic in bitcoin.py 1. Compute the price variations (Δp1, Δp2, and Δp3) for train2 using train1 as input to the Bayesian Regression equation (Equations 6). Make sure to use the similarity metric (Equation 9) in place of the Euclidean distance in Bayesian Regression (Equation 6).  2. Compute the linear regression parameters (w0, w1, w2, w3) by finding the best linear fit (Equation 8). Here you will need to use the ols function of statsmodels.formula.api. Your model should be fit using Δp1, Δp2, and Δp3 as the covariates. Note: the bitcoin order book data was not available, so you do not have to worry about the rw4 term.  3. Use the linear regression model computed in Step 2 and Bayesian Regression estimates, to predict the price variations for the test dataset. Bayesian Regression estimates for test dataset are computed in the same way as they are computed for train2 dataset – using train1 as an input.  4. Once the price variations are predicted, compute the mean squared error (MSE) for the test dataset (the test dataset has 50 vectors => 50 predictions).

🔗 [https://github.com/vkgnandhu177/Bayesian-Regression-and-Bitcoin](https://github.com/vkgnandhu177/Bayesian-Regression-and-Bitcoin)

---

## [purocean/yn](https://github.com/purocean/yn)

A highly extensible Markdown editor. Version control, AI Copilot, mind map, documents encryption, code snippet running, integrated terminal, chart embedding, HTML applets, Reveal.js, plug-in, and macro replacement.

🔗 [https://github.com/purocean/yn](https://github.com/purocean/yn)

---

## [mermaid-js/mermaid](https://github.com/mermaid-js/mermaid)

Generation of diagrams like flowcharts or sequence diagrams from text in a similar manner as markdown

🔗 [https://github.com/mermaid-js/mermaid](https://github.com/mermaid-js/mermaid)

---

## [bvaisvil/zenith](https://github.com/bvaisvil/zenith)

Zenith - sort of like top or htop but with zoom-able charts, CPU, GPU, network, and disk usage

🔗 [https://github.com/bvaisvil/zenith](https://github.com/bvaisvil/zenith)

---

## [terkelg/awesome-creative-coding](https://github.com/terkelg/awesome-creative-coding)

Creative Coding: Generative Art, Data visualization, Interaction Design, Resources.

🔗 [https://github.com/terkelg/awesome-creative-coding](https://github.com/terkelg/awesome-creative-coding)

---

## [tradingview/lightweight-charts](https://github.com/tradingview/lightweight-charts)

Performant financial charts built with HTML5 canvas

🔗 [https://github.com/tradingview/lightweight-charts](https://github.com/tradingview/lightweight-charts)

---

## [visgl/loaders.gl](https://github.com/visgl/loaders.gl)

Loaders for big data visualization. Website:

🔗 [https://github.com/visgl/loaders.gl](https://github.com/visgl/loaders.gl)

---

## [tvjsx/trading-vue-js](https://github.com/tvjsx/trading-vue-js)

💹  Hackable charting lib for traders. You can draw literally ANYTHING on top of candlestick charts. [Not Maintained]

🔗 [https://github.com/tvjsx/trading-vue-js](https://github.com/tvjsx/trading-vue-js)

---

## [mui/mui-x](https://github.com/mui/mui-x)

MUI X: Build complex and data-rich applications using a growing list of advanced React components, like the Data Grid, Date and Time Pickers, Charts, and more!

🔗 [https://github.com/mui/mui-x](https://github.com/mui/mui-x)

---

## [margelo/react-native-graph](https://github.com/margelo/react-native-graph)

📈 Beautiful, high-performance Graphs and Charts for React Native built with Skia

🔗 [https://github.com/margelo/react-native-graph](https://github.com/margelo/react-native-graph)

---

## [ssthouse/tree-chart](https://github.com/ssthouse/tree-chart)

Flexible tree chart using Canvas and Svg, powered by D3.js; ✅Support Vue, Vue3 and React;

🔗 [https://github.com/ssthouse/tree-chart](https://github.com/ssthouse/tree-chart)

---

## [plotly/plotly.py](https://github.com/plotly/plotly.py)

The interactive graphing library for Python :sparkles:

🔗 [https://github.com/plotly/plotly.py](https://github.com/plotly/plotly.py)

---

## [beizhedenglong/rough-charts](https://github.com/beizhedenglong/rough-charts)

📈 A responsive, composable react charting library with a hand-drawn style.

🔗 [https://github.com/beizhedenglong/rough-charts](https://github.com/beizhedenglong/rough-charts)

---

## [plouc/nivo](https://github.com/plouc/nivo)

nivo provides a rich set of dataviz components, built on top of the awesome d3 and React libraries

🔗 [https://github.com/plouc/nivo](https://github.com/plouc/nivo)

---

## [recharts/recharts](https://github.com/recharts/recharts)

Redefined chart library built with React and D3

🔗 [https://github.com/recharts/recharts](https://github.com/recharts/recharts)

---

## [highcharts/highcharts](https://github.com/highcharts/highcharts)

Highcharts JS, the JavaScript charting framework

🔗 [https://github.com/highcharts/highcharts](https://github.com/highcharts/highcharts)

---

## [reactchartjs/react-chartjs-2](https://github.com/reactchartjs/react-chartjs-2)

React components for Chart.js, the most popular charting library

🔗 [https://github.com/reactchartjs/react-chartjs-2](https://github.com/reactchartjs/react-chartjs-2)

---

## [apexcharts/apexcharts.js](https://github.com/apexcharts/apexcharts.js)

📊 Interactive JavaScript Charts built on SVG

🔗 [https://github.com/apexcharts/apexcharts.js](https://github.com/apexcharts/apexcharts.js)

---

## [plotly/plotly.js](https://github.com/plotly/plotly.js)

Open-source JavaScript charting library behind Plotly and Dash

🔗 [https://github.com/plotly/plotly.js](https://github.com/plotly/plotly.js)

---

## [tremorlabs/tremor-npm](https://github.com/tremorlabs/tremor-npm)

React components to build charts and dashboards

🔗 [https://github.com/tremorlabs/tremor-npm](https://github.com/tremorlabs/tremor-npm)

---

## [alandefreitas/matplotplusplus](https://github.com/alandefreitas/matplotplusplus)

Matplot++: A C++ Graphics Library for Data Visualization 📊🗾

🔗 [https://github.com/alandefreitas/matplotplusplus](https://github.com/alandefreitas/matplotplusplus)

---

## [mosra/magnum](https://github.com/mosra/magnum)

Lightweight and modular C++11 graphics middleware for games and data visualization

🔗 [https://github.com/mosra/magnum](https://github.com/mosra/magnum)

---

## [byt3bl33d3r/WitnessMe](https://github.com/byt3bl33d3r/WitnessMe)

Web Inventory tool, takes screenshots of webpages using Pyppeteer (headless Chrome/Chromium) and provides some extra bells & whistles to make life easier.

🔗 [https://github.com/byt3bl33d3r/WitnessMe](https://github.com/byt3bl33d3r/WitnessMe)

---

## [zer011b/fdtd3d](https://github.com/zer011b/fdtd3d)

fdtd3d is an open source 1D, 2D, 3D FDTD electromagnetics solver with MPI, OpenMP and CUDA support for x64, ARM, ARM64, RISC-V, PowerPC, Wasm architectures

🔗 [https://github.com/zer011b/fdtd3d](https://github.com/zer011b/fdtd3d)

---

## [datoviz/datoviz](https://github.com/datoviz/datoviz)

⚡ Datoviz: high-performance GPU rendering for scientific data visualization

🔗 [https://github.com/datoviz/datoviz](https://github.com/datoviz/datoviz)

---

## [XCharts-Team/XCharts](https://github.com/XCharts-Team/XCharts)

A charting and data visualization library for Unity.   Unity数据可视化图表插件。

🔗 [https://github.com/XCharts-Team/XCharts](https://github.com/XCharts-Team/XCharts)

---

## [0xrinegade/GPUSorting](https://github.com/0xrinegade/GPUSorting)

State of the art sorting and segmented sorting, including OneSweep. Implemented in CUDA, D3D12, and Unity style compute shaders. Theoretically portable to all wave/warp/subgroup sizes.

🔗 [https://github.com/0xrinegade/GPUSorting](https://github.com/0xrinegade/GPUSorting)

---

## [b0nes164/GPUSorting](https://github.com/b0nes164/GPUSorting)

State of the art sorting and segmented sorting, including OneSweep. Implemented in CUDA, D3D12, and Unity style compute shaders. Theoretically portable to all wave/warp/subgroup sizes.

🔗 [https://github.com/b0nes164/GPUSorting](https://github.com/b0nes164/GPUSorting)

---

## [tfussell/xlnt](https://github.com/tfussell/xlnt)

:bar_chart: Cross-platform user-friendly xlsx library for C++11+

🔗 [https://github.com/tfussell/xlnt](https://github.com/tfussell/xlnt)

---

## [asmuth/clip](https://github.com/asmuth/clip)

Create charts from the command line

🔗 [https://github.com/asmuth/clip](https://github.com/asmuth/clip)

---

## [nicgirault/circosJS](https://github.com/nicgirault/circosJS)

d3 library to build circular graphs

🔗 [https://github.com/nicgirault/circosJS](https://github.com/nicgirault/circosJS)

---

## [d3k4z/kyber512wasm](https://github.com/d3k4z/kyber512wasm)

Introducing PQ crypto to the web

🔗 [https://github.com/d3k4z/kyber512wasm](https://github.com/d3k4z/kyber512wasm)

---

## [Superalgos/Superalgos](https://github.com/Superalgos/Superalgos)

Free, open-source crypto trading bot, automated bitcoin / cryptocurrency trading software, algorithmic trading bots. Visually design your crypto trading bot, leveraging an integrated charting system, data-mining, backtesting, paper trading, and multi-server crypto bot deployments.

🔗 [https://github.com/Superalgos/Superalgos](https://github.com/Superalgos/Superalgos)

---

## [finos/perspective](https://github.com/finos/perspective)

A data visualization and analytics component, especially well-suited for large and/or streaming datasets.

🔗 [https://github.com/finos/perspective](https://github.com/finos/perspective)

---

## [BlueAlmost/zzplot](https://github.com/BlueAlmost/zzplot)

data visualization/plotting written in zig (using openGL and nanovg-zig)

🔗 [https://github.com/BlueAlmost/zzplot](https://github.com/BlueAlmost/zzplot)

---

## [arabacibahadir/sup-res](https://github.com/arabacibahadir/sup-res)

A great companion for finding key support and resistance levels on financial charts, cryptocurrencies.

🔗 [https://github.com/arabacibahadir/sup-res](https://github.com/arabacibahadir/sup-res)

---

## [mrpandey/d3graphTheory](https://github.com/mrpandey/d3graphTheory)

:boom: Interactive and colorful :art: graph theory tutorials made using d3.js :zap:

🔗 [https://github.com/mrpandey/d3graphTheory](https://github.com/mrpandey/d3graphTheory)

---

## [observablehq/plot](https://github.com/observablehq/plot)

A concise API for exploratory data visualization implementing a layered grammar of graphics

🔗 [https://github.com/observablehq/plot](https://github.com/observablehq/plot)

---

## [siddharth-ssl/tgv-benchmark](https://github.com/siddharth-ssl/tgv-benchmark)

A D3Q27 Lattice Boltzmann fluid flow solver written in C++ to be used as benchmark for any computational purpose

🔗 [https://github.com/siddharth-ssl/tgv-benchmark](https://github.com/siddharth-ssl/tgv-benchmark)

---

## [FormidableLabs/victory](https://github.com/FormidableLabs/victory)

A collection of composable React components for building interactive data visualizations

🔗 [https://github.com/FormidableLabs/victory](https://github.com/FormidableLabs/victory)

---

## [pantunes/xtcryptosignals](https://github.com/pantunes/xtcryptosignals)

Cryptocurrencies price data collection, price tickers, signals notifications, charts, Telegram bot and more.

🔗 [https://github.com/pantunes/xtcryptosignals](https://github.com/pantunes/xtcryptosignals)

---

## [taoteh1221/Open_Crypto_Tracker](https://github.com/taoteh1221/Open_Crypto_Tracker)

Bitcoin / Alts private portfolio tracker, with email / text / alexa / telegram price alerts, charts, leverage support and much more.

🔗 [https://github.com/taoteh1221/Open_Crypto_Tracker](https://github.com/taoteh1221/Open_Crypto_Tracker)

---

## [andredumas/techan.js](https://github.com/andredumas/techan.js)

A visual, technical analysis and charting (Candlestick, OHLC, indicators) library built on D3.

🔗 [https://github.com/andredumas/techan.js](https://github.com/andredumas/techan.js)

---

## [akenshaw/flowsurface](https://github.com/akenshaw/flowsurface)

A native desktop charting platform for crypto markets with intuitive orderflow visualizations

🔗 [https://github.com/akenshaw/flowsurface](https://github.com/akenshaw/flowsurface)

---

## [kroitor/asciichart](https://github.com/kroitor/asciichart)

Nice-looking lightweight console ASCII line charts ╭┈╯ for NodeJS, browsers and terminal, no dependencies

🔗 [https://github.com/kroitor/asciichart](https://github.com/kroitor/asciichart)

---

## [ss-d3v/onionX](https://github.com/ss-d3v/onionX)

A bash script to easily run TOR hidden service on termux and most linux distros

🔗 [https://github.com/ss-d3v/onionX](https://github.com/ss-d3v/onionX)

---

## [machbase/neo-server](https://github.com/machbase/neo-server)

machbase-neo = time series database + mqtt + http + data visualization

🔗 [https://github.com/machbase/neo-server](https://github.com/machbase/neo-server)

---

## [liwenhe1993/charts](https://github.com/liwenhe1993/charts)

ClickHouse is a free analytic DBMS for big data https://clickhouse.yandex

🔗 [https://github.com/liwenhe1993/charts](https://github.com/liwenhe1993/charts)

---

## [CloudWise-OpenSource/FlyFish](https://github.com/CloudWise-OpenSource/FlyFish)

FlyFish is a data visualization coding platform. We can create a data model quickly in a simple way, and quickly generate a set of data visualization solutions by dragging.

🔗 [https://github.com/CloudWise-OpenSource/FlyFish](https://github.com/CloudWise-OpenSource/FlyFish)

---

## [eclipse-cdt-cloud/timeline-chart](https://github.com/eclipse-cdt-cloud/timeline-chart)

A timeline / gantt chart library for large data (e.g. traces)

🔗 [https://github.com/eclipse-cdt-cloud/timeline-chart](https://github.com/eclipse-cdt-cloud/timeline-chart)

---

## [edgelesssys/helm](https://github.com/edgelesssys/helm)

Edgeless Systems' helm charts

🔗 [https://github.com/edgelesssys/helm](https://github.com/edgelesssys/helm)

---

## [n0vad3v/simple-multinode-clickhouse-cluster](https://github.com/n0vad3v/simple-multinode-clickhouse-cluster)

Deploy a simple Multi-Node Clickhouse Cluster with docker-compose in minutes.

🔗 [https://github.com/n0vad3v/simple-multinode-clickhouse-cluster](https://github.com/n0vad3v/simple-multinode-clickhouse-cluster)

---

## [cosmoduende/r-ufo-sightings](https://github.com/cosmoduende/r-ufo-sightings)

Are we alone in the universe? - Data Analysis and Data Visualization of UFO sightings with R. How to analyze and visualize data of UFO sightings of the last century in the USA and the rest of the world with R language.

🔗 [https://github.com/cosmoduende/r-ufo-sightings](https://github.com/cosmoduende/r-ufo-sightings)

---

## [RandomFractals/vscode-data-preview](https://github.com/RandomFractals/vscode-data-preview)

Data Preview 🈸 extension for importing 📤 viewing 🔎 slicing 🔪 dicing 🎲  charting 📊 & exporting 📥 large JSON array/config, YAML, Apache Arrow, Avro, Parquet & Excel data files

🔗 [https://github.com/RandomFractals/vscode-data-preview](https://github.com/RandomFractals/vscode-data-preview)

---

## [VolkovLabs/business-charts](https://github.com/VolkovLabs/business-charts)

The Business Charts plugin integrates the powerful Apache ECharts library into Grafana, enabling you to create rich, interactive charts and graphs within your dashboards. Built on pure JavaScript and leveraging zrender for lightweight rendering, Apache ECharts offers a wide range of chart types and statistical tools.

🔗 [https://github.com/VolkovLabs/business-charts](https://github.com/VolkovLabs/business-charts)

---

## [chartdb/chartdb](https://github.com/chartdb/chartdb)

Database diagrams editor that allows you to visualize and design your DB with a single query.

🔗 [https://github.com/chartdb/chartdb](https://github.com/chartdb/chartdb)

---

## [StructuredLabs/preswald](https://github.com/StructuredLabs/preswald)

Preswald is a WASM packager for Python-based interactive data apps: bundle full complex data workflows, particularly visualizations, into single files, runnable completely in-browser, using Pyodide, DuckDB, Pandas, and Plotly, Matplotlib, etc. Build dashboards, reports, and notebooks that run offline, load fast, and share like a document.

🔗 [https://github.com/StructuredLabs/preswald](https://github.com/StructuredLabs/preswald)

---

## [visgl/hubble.gl](https://github.com/visgl/hubble.gl)

A client-side JavaScript library for animating data visualizations and rendering videos.

🔗 [https://github.com/visgl/hubble.gl](https://github.com/visgl/hubble.gl)

---

## [evidence-dev/evidence](https://github.com/evidence-dev/evidence)

Business intelligence as code: build fast, interactive data visualizations in SQL and markdown

🔗 [https://github.com/evidence-dev/evidence](https://github.com/evidence-dev/evidence)

---

## [aourednik/ideograph](https://github.com/aourednik/ideograph)

an interactive visual tool for exploring ideologies of political parties from up to date WikiData, using SPARQL, D3js, and PixiJS

🔗 [https://github.com/aourednik/ideograph](https://github.com/aourednik/ideograph)

---

## [xploitspeeds/Bookmarklet-Hacks-For-School](https://github.com/xploitspeeds/Bookmarklet-Hacks-For-School)

* READ THE README FOR INFO!! * Incoming Tags- z score statistics,find mean median mode statistics in ms excel,variance,standard deviation,linear regression,data processing,confidence  intervals,average value,probability theory,binomial distribution,matrix,random numbers,error propagation,t statistics analysis,hypothesis testing,theorem,chi square,time series,data collection,sampling,p value,scatterplots,statistics lectures,statistics tutorials,business mathematics statistics,share stock market statistics in calculator,business analytics,GTA,continuous frequency distribution,statistics mathematics in real life,modal class,n is even,n is odd,median mean of series of numbers,math help,Sujoy Krishna Das,n+1/2 element,measurement of variation,measurement of central tendency,range of numbers,interquartile range,casio fx991,casio fx82,casio fx570,casio fx115es,casio 9860,casio 9750,casio 83gt,TI BAII+ financial,casio piano,casio calculator tricks and hacks,how to cheat in exam and not get caught,grouped interval data,equation of triangle rectangle curve parabola hyperbola,graph theory,operation research(OR),numerical methods,decision making,pie chart,bar graph,computer data analysis,histogram,statistics formula,matlab tutorial,find arithmetic mean geometric mean,find population standard deviation,find sample standard deviation,how to use a graphic calculator,pre algebra,pre calculus,absolute deviation,TI Nspire,TI 84 TI83 calculator tutorial,texas instruments calculator,grouped data,set theory,IIT JEE,AIEEE,GCSE,CAT,MAT,SAT,GMAT,MBBS,JELET,JEXPO,VOCLET,Indiastudychannel,IAS,IPS,IFS,GATE,B-Tech,M-Tech,AMIE,MBA,BBA,BCA,MCA,XAT,TOEFL,CBSE,ICSE,HS,WBUT,SSC,IUPAC,Narendra Modi,Sachin Tendulkar Farewell Speech,Dhoom 3,Arvind Kejriwal,maths revision,how to score good marks in exams,how to pass math exams easily,JEE 12th physics chemistry maths PCM,JEE maths shortcut techniques,quadratic equations,competition exams tips and ticks,competition maths,govt job,JEE KOTA,college math,mean value theorem,L hospital rule,tech guru awaaz,derivation,cryptography,iphone 5 fingerprint hack,crash course,CCNA,converting fractions,solve word problem,cipher,game theory,GDP,how to earn money online on youtube,demand curve,computer science,prime factorization,LCM & GCF,gauss elimination,vector,complex numbers,number systems,vector algebra,logarithm,trigonometry,organic chemistry,electrical math problem,eigen value eigen vectors,runge kutta,gauss jordan,simpson 1/3 3/8 trapezoidal rule,solved problem example,newton raphson,interpolation,integration,differentiation,regula falsi,programming,algorithm,gauss seidal,gauss jacobi,taylor series,iteration,binary arithmetic,logic gates,matrix inverse,determinant of matrix,matrix calculator program,sex in ranchi,sex in kolkata,vogel approximation VAM optimization problem,North west NWCR,Matrix minima,Modi method,assignment problem,transportation problem,simplex,k map,boolean algebra,android,casio FC 200v 100v financial,management mathematics tutorials,net present value NPV,time value of money TVM,internal rate of return IRR Bond price,present value PV and future value FV of annuity casio,simple interest SI & compound interest CI casio,break even point,amortization calculation,HP 10b financial calculator,banking and money,income tax e filing,economics,finance,profit & loss,yield of investment bond,Sharp EL 735S,cash flow casio,re finance,insurance and financial planning,investment appraisal,shortcut keys,depreciation,discounting

🔗 [https://github.com/xploitspeeds/Bookmarklet-Hacks-For-School](https://github.com/xploitspeeds/Bookmarklet-Hacks-For-School)

---

## [vizzuhq/vizzu-lib](https://github.com/vizzuhq/vizzu-lib)

Library for animated data visualizations and data stories.

🔗 [https://github.com/vizzuhq/vizzu-lib](https://github.com/vizzuhq/vizzu-lib)

---

## [plotly/plotly.rs](https://github.com/plotly/plotly.rs)

Plotly for Rust

🔗 [https://github.com/plotly/plotly.rs](https://github.com/plotly/plotly.rs)

---

## [pkjmesra/PKScreener](https://github.com/pkjmesra/PKScreener)

A Python-based stock screener for NSE, India. PKScreener is an advanced free stock screener to find potential breakout stocks from NSE and show its possible breakout values. It also helps to find the stocks which are consolidating and may breakout, or the particular chart patterns that you're looking specifically to make your decisions.

🔗 [https://github.com/pkjmesra/PKScreener](https://github.com/pkjmesra/PKScreener)

---

## [leeoniya/uPlot](https://github.com/leeoniya/uPlot)

📈 A small, fast chart for time series, lines, areas, ohlc & bars

🔗 [https://github.com/leeoniya/uPlot](https://github.com/leeoniya/uPlot)

---

## [skywind3000/kcp](https://github.com/skywind3000/kcp)

:zap: KCP - A Fast and Reliable ARQ Protocol

🔗 [https://github.com/skywind3000/kcp](https://github.com/skywind3000/kcp)

---

## [apache/echarts](https://github.com/apache/echarts)

Apache ECharts is a powerful, interactive charting and data visualization library for browser

🔗 [https://github.com/apache/echarts](https://github.com/apache/echarts)

---

## [tool3/chartscii](https://github.com/tool3/chartscii)

📊 create beautiful ascii charts

🔗 [https://github.com/tool3/chartscii](https://github.com/tool3/chartscii)

---

## [AndreaSimeone/d3-hypergraph](https://github.com/AndreaSimeone/d3-hypergraph)

implement hypergraphs on D3 force layout

🔗 [https://github.com/AndreaSimeone/d3-hypergraph](https://github.com/AndreaSimeone/d3-hypergraph)

---

## [biolab/orange3](https://github.com/biolab/orange3)

🍊 :bar_chart: :bulb: Orange: Interactive data analysis

🔗 [https://github.com/biolab/orange3](https://github.com/biolab/orange3)

---

## [predict-idlab/plotly-resampler](https://github.com/predict-idlab/plotly-resampler)

Visualize large time series data with plotly.py

🔗 [https://github.com/predict-idlab/plotly-resampler](https://github.com/predict-idlab/plotly-resampler)

---

## [owid/owid-grapher](https://github.com/owid/owid-grapher)

A platform for creating interactive data visualizations

🔗 [https://github.com/owid/owid-grapher](https://github.com/owid/owid-grapher)

---

## [mckinsey/vizro](https://github.com/mckinsey/vizro)

Vizro is a low-code toolkit for building high-quality data visualization apps.

🔗 [https://github.com/mckinsey/vizro](https://github.com/mckinsey/vizro)

---

## [MakieOrg/Makie.jl](https://github.com/MakieOrg/Makie.jl)

Interactive data visualizations and plotting in Julia

🔗 [https://github.com/MakieOrg/Makie.jl](https://github.com/MakieOrg/Makie.jl)

---

## [vanila-io/wireflow](https://github.com/vanila-io/wireflow)

Wireflow - user flow chart real-time collaborative tool

🔗 [https://github.com/vanila-io/wireflow](https://github.com/vanila-io/wireflow)

---

## [jamesbrink/darkstar](https://github.com/jamesbrink/darkstar)

DarkStar - Experimental data visualization project using force directed graphs.

🔗 [https://github.com/jamesbrink/darkstar](https://github.com/jamesbrink/darkstar)

---

## [apache/superset](https://github.com/apache/superset)

Apache Superset is a Data Visualization and Data Exploration Platform

🔗 [https://github.com/apache/superset](https://github.com/apache/superset)

---

## [avs/avs-go](https://github.com/avs/avs-go)

Common web components for AVS data visualization products

🔗 [https://github.com/avs/avs-go](https://github.com/avs/avs-go)

---

## [2b-t/LB-t](https://github.com/2b-t/LB-t)

Multi-threaded object-oriented computational fluid dynamics (CFD) code for three-dimensional incompressible fluid flow on a regular grid with the incompressible lattice-Boltzmann method (LBM) for general lattices (D2Q9, D3Q15, D3Q19, D3Q27, ...) with A-A pattern for indexing - programmed in C++17, multi-threaded with OpenMP

🔗 [https://github.com/2b-t/LB-t](https://github.com/2b-t/LB-t)

---

## [novus/nvd3](https://github.com/novus/nvd3)

A reusable charting library written in d3.js

🔗 [https://github.com/novus/nvd3](https://github.com/novus/nvd3)

---

## [piquette/finance-go](https://github.com/piquette/finance-go)

:bar_chart: Financial markets data library implemented in go.

🔗 [https://github.com/piquette/finance-go](https://github.com/piquette/finance-go)

---

## [running-elephant/datart](https://github.com/running-elephant/datart)

Datart is a next generation Data Visualization Open Platform

🔗 [https://github.com/running-elephant/datart](https://github.com/running-elephant/datart)

---

## [visgl/luma.gl](https://github.com/visgl/luma.gl)

High-performance Toolkit for WebGL-based Data Visualization

🔗 [https://github.com/visgl/luma.gl](https://github.com/visgl/luma.gl)

---

## [huww98/TimeChart](https://github.com/huww98/TimeChart)

An chart library specialized for large-scale time-series data, built on WebGL.

🔗 [https://github.com/huww98/TimeChart](https://github.com/huww98/TimeChart)

---

## [cyanly/lbplot-rs](https://github.com/cyanly/lbplot-rs)

Limit OrderBook Chart with Heatmap Visualisation

🔗 [https://github.com/cyanly/lbplot-rs](https://github.com/cyanly/lbplot-rs)

---

## [fstream/OrderbookVis](https://github.com/fstream/OrderbookVis)

An orderbook data visualization

🔗 [https://github.com/fstream/OrderbookVis](https://github.com/fstream/OrderbookVis)

---


[← Previous: Data Quality](data-quality.txt) | [🏠 Back to README](../README.md) | [Next: Debuggers →](debuggers.txt)
