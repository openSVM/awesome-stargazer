[← Previous: Aldrin](aldrin.txt) | [🏠 Back to README](../README.md) | [Next: Analytics →](analytics.txt)

---

# ALGOTRADING

**86 repositories**

---

## [stefan-jansen/machine-learning-for-trading](https://github.com/stefan-jansen/machine-learning-for-trading)

Code for Machine Learning for Algorithmic Trading, 2nd edition.

🔗 [https://github.com/stefan-jansen/machine-learning-for-trading](https://github.com/stefan-jansen/machine-learning-for-trading)

---

## [jcwill415/Stock_Market_Data_Analysis](https://github.com/jcwill415/Stock_Market_Data_Analysis)

Scrape, analyze & visualize stock market data for the S&P500 using Python. Build a basic trading strategy using machine learning to assess company performance and determine buy, sell, hold. Read me & instructions available in Spanish. This is a working repo, with plans to expand the project from technical analysis to fundamental analysis.

🔗 [https://github.com/jcwill415/Stock_Market_Data_Analysis](https://github.com/jcwill415/Stock_Market_Data_Analysis)

---

## [kanupriyaanand/Pairs_Trading_Quant](https://github.com/kanupriyaanand/Pairs_Trading_Quant)

A pairs trade is a market neutral trading strategy enabling traders to profit from virtually any market conditions. This strategy is categorized as a statistical arbitrage and convergence trading strategy.

🔗 [https://github.com/kanupriyaanand/Pairs_Trading_Quant](https://github.com/kanupriyaanand/Pairs_Trading_Quant)

---

## [The-Swarm-Corporation/ATLAS](https://github.com/The-Swarm-Corporation/ATLAS)

ATLAS is a sophisticated real-time risk analysis system designed for institutional-grade market risk assessment. Built with high-frequency trading (HFT) capabilities and advanced machine learning techniques, ATLAS provides continuous volatility predictions and risk metrics using both historical patterns and real-time market data.

🔗 [https://github.com/The-Swarm-Corporation/ATLAS](https://github.com/The-Swarm-Corporation/ATLAS)

---

## [MRYingLEE/BackTesting-LowLaterncy](https://github.com/MRYingLEE/BackTesting-LowLaterncy)

This is a backtesting demo in Python. Different moving average prices are used to make buy and sell decisions. A Jupyter notebook version is for serial mode. while py version is for multiprocessing. A version for GPU has been tried, but not successful.

🔗 [https://github.com/MRYingLEE/BackTesting-LowLaterncy](https://github.com/MRYingLEE/BackTesting-LowLaterncy)

---

## [vkgnandhu177/Bayesian-Regression-and-Bitcoin](https://github.com/vkgnandhu177/Bayesian-Regression-and-Bitcoin)

# Bayesian-Regression-to-Predict-Bitcoin-Price-Variations Predicting the price variations of bitcoin, a virtual cryptographic currency. These predictions could be used as the foundation of a bitcoin trading strategy. To make these predictions, we will have to familiarize ourself with a machine learning technique, Bayesian Regression, and implement this technique in Python.  # Datasets We have the datasets in the data folder. The original raw data can be found here: http://api.bitcoincharts.com/v1/csv/. The datasets from this site have three attributes:   (1) time in epoch,   (2) price in USD per bitcoin, and   (3) bitcoin amount in a transaction (buy/sell).   However, only the first two attributes are relevant to this project.  To make the data to have evenly space records, we took all the records within a 20 second window and replaced it by a single record as the average of all the transaction prices in that window. Not every 20 second window had a record; therefore those missing entries were filled using the prices of the previous 20 observations and assuming a Gaussian distribution. The raw data that has been cleaned is given in the file dataset.csv  Finally, as discussed in the paper, the data was divided into a total of 9 different datasets. The whole dataset is partitioned into three equally sized (50 price variations in each) subsets: train1, train2, and test. The train sets are used for training a linear model, while the test set is for evaluation of the model. There are three csv files associated with each subset of data: *_90.csv, *_180.csv, and *_360.csv. In _90.csv, for example, each line represents a vector of length 90 where the elements are 30 minute worth of bitcoin price variations (since we have 20 second intervals) and a price variation in the 91st column. Similarly, the *_180.csv represents 60 minutes of prices and *_360.csv represents 120 minutes of prices.  # Project Requirements We are expected to implement the Bayesian Regression model to predict the future price variation of bitcoin as described in the reference paper. The main parts to focus on are Equation 6 and the Predicting Price Change section.  # Logic in bitcoin.py 1. Compute the price variations (Δp1, Δp2, and Δp3) for train2 using train1 as input to the Bayesian Regression equation (Equations 6). Make sure to use the similarity metric (Equation 9) in place of the Euclidean distance in Bayesian Regression (Equation 6).  2. Compute the linear regression parameters (w0, w1, w2, w3) by finding the best linear fit (Equation 8). Here you will need to use the ols function of statsmodels.formula.api. Your model should be fit using Δp1, Δp2, and Δp3 as the covariates. Note: the bitcoin order book data was not available, so you do not have to worry about the rw4 term.  3. Use the linear regression model computed in Step 2 and Bayesian Regression estimates, to predict the price variations for the test dataset. Bayesian Regression estimates for test dataset are computed in the same way as they are computed for train2 dataset – using train1 as an input.  4. Once the price variations are predicted, compute the mean squared error (MSE) for the test dataset (the test dataset has 50 vectors => 50 predictions).

🔗 [https://github.com/vkgnandhu177/Bayesian-Regression-and-Bitcoin](https://github.com/vkgnandhu177/Bayesian-Regression-and-Bitcoin)

---

## [bradleyboyuyang/ML-HFT](https://github.com/bradleyboyuyang/ML-HFT)

High frequency trading (HFT) framework built for futures using machine learning and deep learning techniques

🔗 [https://github.com/bradleyboyuyang/ML-HFT](https://github.com/bradleyboyuyang/ML-HFT)

---

## [huseinzol05/Stock-Prediction-Models](https://github.com/huseinzol05/Stock-Prediction-Models)

Gathers machine learning and deep learning models for Stock forecasting including trading bots and simulations

🔗 [https://github.com/huseinzol05/Stock-Prediction-Models](https://github.com/huseinzol05/Stock-Prediction-Models)

---

## [Yvictor/TradingGym](https://github.com/Yvictor/TradingGym)

Trading and Backtesting environment for training reinforcement learning agent or simple rule base algo.

🔗 [https://github.com/Yvictor/TradingGym](https://github.com/Yvictor/TradingGym)

---

## [cbailes/awesome-deep-trading](https://github.com/cbailes/awesome-deep-trading)

List of awesome resources for machine learning-based algorithmic trading

🔗 [https://github.com/cbailes/awesome-deep-trading](https://github.com/cbailes/awesome-deep-trading)

---

## [asavinov/intelligent-trading-bot](https://github.com/asavinov/intelligent-trading-bot)

Intelligent Trading Bot: Automatically generating signals and trading based on machine learning and feature engineering

🔗 [https://github.com/asavinov/intelligent-trading-bot](https://github.com/asavinov/intelligent-trading-bot)

---

## [babakmahdavi/HFTE](https://github.com/babakmahdavi/HFTE)

Context: Supporting material for the paper "Guidelines for Building a Realistic Algorithmic Trading Market Simulator for Backtesting while Incorporating Market Impact" What it does: This is a simplification of the HFT game. We examine, in sequence how different classic financial strategies fair with respect to each other via an orderbook

🔗 [https://github.com/babakmahdavi/HFTE](https://github.com/babakmahdavi/HFTE)

---

## [purefinance/mmb](https://github.com/purefinance/mmb)

Trading bot implemented in Rust, with market making and strategy automation for any exchange or blockchain.

🔗 [https://github.com/purefinance/mmb](https://github.com/purefinance/mmb)

---

## [rorysroes/SGX-Full-OrderBook-Tick-Data-Trading-Strategy](https://github.com/rorysroes/SGX-Full-OrderBook-Tick-Data-Trading-Strategy)

Providing the solutions for high-frequency trading (HFT) strategies using data science approaches (Machine Learning) on Full Orderbook Tick Data.

🔗 [https://github.com/rorysroes/SGX-Full-OrderBook-Tick-Data-Trading-Strategy](https://github.com/rorysroes/SGX-Full-OrderBook-Tick-Data-Trading-Strategy)

---

## [nmweaver/soltrade](https://github.com/nmweaver/soltrade)

Python trading bot using the Solana blockchain.

🔗 [https://github.com/nmweaver/soltrade](https://github.com/nmweaver/soltrade)

---

## [fasenderos/nodejs-order-book](https://github.com/fasenderos/nodejs-order-book)

Ultra-fast Limit Order Book for Node.js written in TypeScript for high-frequency trading (HFT) :rocket::rocket:

🔗 [https://github.com/fasenderos/nodejs-order-book](https://github.com/fasenderos/nodejs-order-book)

---

## [0xAbin/orderbook-HFT](https://github.com/0xAbin/orderbook-HFT)

OrderBook - Integrates Prep, Spot, and Matching Engine

🔗 [https://github.com/0xAbin/orderbook-HFT](https://github.com/0xAbin/orderbook-HFT)

---

## [fortesenselabs/trade_flow](https://github.com/fortesenselabs/trade_flow)

A toolkit for composing self-learning algorithmic trading agents

🔗 [https://github.com/fortesenselabs/trade_flow](https://github.com/fortesenselabs/trade_flow)

---

## [gweidart/alpha-evm-dex-bot](https://github.com/gweidart/alpha-evm-dex-bot)

🤖 Automated multifunctional DeFi trading bot for the KCC ecosystem.  Sniping, Front run, Limit orders, Stop Loss, and more...

🔗 [https://github.com/gweidart/alpha-evm-dex-bot](https://github.com/gweidart/alpha-evm-dex-bot)

---

## [jeffersonlicet/price-prediction-bot](https://github.com/jeffersonlicet/price-prediction-bot)

🔮  Run backtest over PancakeSwap and CandleGenie Prediction and place realtime bets - Trading Bot

🔗 [https://github.com/jeffersonlicet/price-prediction-bot](https://github.com/jeffersonlicet/price-prediction-bot)

---

## [michaelgrosner/tribeca](https://github.com/michaelgrosner/tribeca)

A high frequency, market making cryptocurrency trading platform in node.js

🔗 [https://github.com/michaelgrosner/tribeca](https://github.com/michaelgrosner/tribeca)

---

## [Superalgos/Superalgos](https://github.com/Superalgos/Superalgos)

Free, open-source crypto trading bot, automated bitcoin / cryptocurrency trading software, algorithmic trading bots. Visually design your crypto trading bot, leveraging an integrated charting system, data-mining, backtesting, paper trading, and multi-server crypto bot deployments.

🔗 [https://github.com/Superalgos/Superalgos](https://github.com/Superalgos/Superalgos)

---

## [s-brez/trading-server](https://github.com/s-brez/trading-server)

Multi-asset, multi-strategy, event-driven trading platform for running low to medium freq strategies at many venues simultaneously with portfolio-based risk management and %-per-strategy capital allocation. Supports event-driven backtesting across all desired instruments, venues and strategies under a single parameterized portfolio.

🔗 [https://github.com/s-brez/trading-server](https://github.com/s-brez/trading-server)

---

## [lfginweb3/solana-bot](https://github.com/lfginweb3/solana-bot)

Omnipotent Trading Bot for SPL token on Solana. The most powerful and the best Automatic Market Making System(boost token holders, boost trading volume, etc...)

🔗 [https://github.com/lfginweb3/solana-bot](https://github.com/lfginweb3/solana-bot)

---

## [ivopetiz/algotrading](https://github.com/ivopetiz/algotrading)

Algorithmic trading framework for cryptocurrencies.

🔗 [https://github.com/ivopetiz/algotrading](https://github.com/ivopetiz/algotrading)

---

## [mmssss/hft-market-making](https://github.com/mmssss/hft-market-making)

Implementation of HFT backtesting simulator and Stoikov strategy

🔗 [https://github.com/mmssss/hft-market-making](https://github.com/mmssss/hft-market-making)

---

## [StockSharp/StockSharp](https://github.com/StockSharp/StockSharp)

Algorithmic trading and quantitative trading open source platform to develop trading robots (stock markets, forex, crypto, bitcoins, and options).

🔗 [https://github.com/StockSharp/StockSharp](https://github.com/StockSharp/StockSharp)

---

## [jialuechen/trademind](https://github.com/jialuechen/trademind)

Hybrid Event-driven and Vectorized Strategy Backtesting Library

🔗 [https://github.com/jialuechen/trademind](https://github.com/jialuechen/trademind)

---

## [kelvinau/crypto-arbitrage](https://github.com/kelvinau/crypto-arbitrage)

Automatic Cryptocurrency Trading Bot using Triangular or Exchange Arbitrages

🔗 [https://github.com/kelvinau/crypto-arbitrage](https://github.com/kelvinau/crypto-arbitrage)

---

## [botcrypto-io/awesome-crypto-trading-bots](https://github.com/botcrypto-io/awesome-crypto-trading-bots)

Awesome crypto trading bots

🔗 [https://github.com/botcrypto-io/awesome-crypto-trading-bots](https://github.com/botcrypto-io/awesome-crypto-trading-bots)

---

## [thrasher-corp/gocryptotrader](https://github.com/thrasher-corp/gocryptotrader)

A cryptocurrency trading bot and framework supporting multiple exchanges written in Golang.

🔗 [https://github.com/thrasher-corp/gocryptotrader](https://github.com/thrasher-corp/gocryptotrader)

---

## [DangerAcorn/pumpfun-tools](https://github.com/DangerAcorn/pumpfun-tools)

All-in-one PumpFun Bundler suite featuring PumpFun Bundler (20+ wallets), MEV bot protection, high-frequency trading bot, Solana token creator, jito bundle, multi wallet management, live price tracking, custom RPC nodes, anti rug tools, and instant token launches.

🔗 [https://github.com/DangerAcorn/pumpfun-tools](https://github.com/DangerAcorn/pumpfun-tools)

---

## [hadialaddin/crypto-genie](https://github.com/hadialaddin/crypto-genie)

Suite of advanced automated trading bots and risk management tools to empower Day Traders and enable them to stick to their Trade Plans.

🔗 [https://github.com/hadialaddin/crypto-genie](https://github.com/hadialaddin/crypto-genie)

---

## [ZENALC/algobot](https://github.com/ZENALC/algobot)

Cryptocurrency trading bot with a graphical user interface with support for simulations, backtests, optimizations, and running live bots.

🔗 [https://github.com/ZENALC/algobot](https://github.com/ZENALC/algobot)

---

## [Drakkar-Software/OctoBot](https://github.com/Drakkar-Software/OctoBot)

Open source crypto trading bot

🔗 [https://github.com/Drakkar-Software/OctoBot](https://github.com/Drakkar-Software/OctoBot)

---

## [polakowo/vectorbt](https://github.com/polakowo/vectorbt)

Find your trading edge, using the fastest engine for backtesting, algorithmic trading, and research.

🔗 [https://github.com/polakowo/vectorbt](https://github.com/polakowo/vectorbt)

---

## [ctubio/Krypto-trading-bot](https://github.com/ctubio/Krypto-trading-bot)

Self-hosted crypto trading bot (automated high frequency market making) written in C++

🔗 [https://github.com/ctubio/Krypto-trading-bot](https://github.com/ctubio/Krypto-trading-bot)

---

## [karma0/nombot](https://github.com/karma0/nombot)

Cryptocurrency Trading Bot

🔗 [https://github.com/karma0/nombot](https://github.com/karma0/nombot)

---

## [zbarge/stocklook](https://github.com/zbarge/stocklook)

crypto currency library for trading & market making bots, account management, and data analysis

🔗 [https://github.com/zbarge/stocklook](https://github.com/zbarge/stocklook)

---

## [nkaz001/hftbacktest](https://github.com/nkaz001/hftbacktest)

Free, open source, a high frequency trading and market making backtesting and trading bot, which accounts for limit orders, queue positions, and latencies, utilizing full tick data for trades and order books(Level-2 and Level-3), with real-world crypto trading examples for Binance and Bybit

🔗 [https://github.com/nkaz001/hftbacktest](https://github.com/nkaz001/hftbacktest)

---

## [c9s/bbgo](https://github.com/c9s/bbgo)

The modern cryptocurrency trading bot framework written in Go.

🔗 [https://github.com/c9s/bbgo](https://github.com/c9s/bbgo)

---

## [SpiralDevelopment/crypto-hft-data](https://github.com/SpiralDevelopment/crypto-hft-data)

Collect real-time orderbook, trade and other HFT data from several crypto exchanges using WebSocket connections.

🔗 [https://github.com/SpiralDevelopment/crypto-hft-data](https://github.com/SpiralDevelopment/crypto-hft-data)

---

## [nkaz001/algotrading-example](https://github.com/nkaz001/algotrading-example)

algorithmic trading backtest and optimization examples using order book imbalances. (bitcoin, cryptocurrency, bitmex, binance futures, market making)

🔗 [https://github.com/nkaz001/algotrading-example](https://github.com/nkaz001/algotrading-example)

---

## [Crypto-toolbox/HFT-Orderbook](https://github.com/Crypto-toolbox/HFT-Orderbook)

Limit Order Book for high-frequency trading (HFT), as described by WK Selph, implemented in Python3 and C

🔗 [https://github.com/Crypto-toolbox/HFT-Orderbook](https://github.com/Crypto-toolbox/HFT-Orderbook)

---

## [hummingbot/hummingbot](https://github.com/hummingbot/hummingbot)

Open source software that helps you create and deploy high-frequency crypto trading bots

🔗 [https://github.com/hummingbot/hummingbot](https://github.com/hummingbot/hummingbot)

---

## [visualHFT/VisualHFT](https://github.com/visualHFT/VisualHFT)

VisualHFT is a WPF/C# desktop GUI that shows market microstructure in real time. You can track advanced limit‑order‑book dynamics and execution quality, then use its modular plugins to shape the analysis to your workflow.

🔗 [https://github.com/visualHFT/VisualHFT](https://github.com/visualHFT/VisualHFT)

---

## [freqtrade/freqtrade](https://github.com/freqtrade/freqtrade)

Free, open source crypto trading bot

🔗 [https://github.com/freqtrade/freqtrade](https://github.com/freqtrade/freqtrade)

---

## [mementum/backtrader](https://github.com/mementum/backtrader)

Python Backtesting library for trading strategies

🔗 [https://github.com/mementum/backtrader](https://github.com/mementum/backtrader)

---

## [scrtlabs/catalyst](https://github.com/scrtlabs/catalyst)

An Algorithmic Trading Library for Crypto-Assets in Python

🔗 [https://github.com/scrtlabs/catalyst](https://github.com/scrtlabs/catalyst)

---

## [Behappy123/market-maker](https://github.com/Behappy123/market-maker)

Vastly Improved BitMEX Market Making Algo

🔗 [https://github.com/Behappy123/market-maker](https://github.com/Behappy123/market-maker)

---

## [AsyncAlgoTrading/aat](https://github.com/AsyncAlgoTrading/aat)

Asynchronous, event-driven algorithmic trading in Python and C++

🔗 [https://github.com/AsyncAlgoTrading/aat](https://github.com/AsyncAlgoTrading/aat)

---

## [AsyncAlgoTrading/algo-coin](https://github.com/AsyncAlgoTrading/algo-coin)

Python library for algorithmic trading cryptocurrencies across multiple exchanges

🔗 [https://github.com/AsyncAlgoTrading/algo-coin](https://github.com/AsyncAlgoTrading/algo-coin)

---

## [LasticotSoftware/Astibot](https://github.com/LasticotSoftware/Astibot)

Astibot is a simple, visual and automated trading software for Coinbase Pro cryptocurrencies (Bitcoin trading bot)

🔗 [https://github.com/LasticotSoftware/Astibot](https://github.com/LasticotSoftware/Astibot)

---

## [Roibal/Cryptocurrency-Trading-Bots-Python-Beginner-Advance](https://github.com/Roibal/Cryptocurrency-Trading-Bots-Python-Beginner-Advance)

Crypto Trading Bots in Python - Triangular Arbitrage, Beginner & Advanced Cryptocurrency Trading Bots Written in Python

🔗 [https://github.com/Roibal/Cryptocurrency-Trading-Bots-Python-Beginner-Advance](https://github.com/Roibal/Cryptocurrency-Trading-Bots-Python-Beginner-Advance)

---

## [rodrigo-brito/ninjabot](https://github.com/rodrigo-brito/ninjabot)

A fast trading bot platform for cryptocurrency in Go (Binance)

🔗 [https://github.com/rodrigo-brito/ninjabot](https://github.com/rodrigo-brito/ninjabot)

---

## [je-suis-tm/quant-trading](https://github.com/je-suis-tm/quant-trading)

Python quantitative trading strategies including VIX Calculator, Pattern Recognition, Commodity Trading Advisor, Monte Carlo, Options Straddle, Shooting Star, London Breakout, Heikin-Ashi, Pair Trading, RSI, Bollinger Bands, Parabolic SAR, Dual Thrust, Awesome, MACD

🔗 [https://github.com/je-suis-tm/quant-trading](https://github.com/je-suis-tm/quant-trading)

---

## [Ameobea/tickgrinder](https://github.com/Ameobea/tickgrinder)

Low-latency algorithmic trading platform written in Rust

🔗 [https://github.com/Ameobea/tickgrinder](https://github.com/Ameobea/tickgrinder)

---

## [alexey-ernest/go-hft-orderbook](https://github.com/alexey-ernest/go-hft-orderbook)

Golang implementation of a Limit Order Book (LOB) for high frequency trading in crypto exchanges

🔗 [https://github.com/alexey-ernest/go-hft-orderbook](https://github.com/alexey-ernest/go-hft-orderbook)

---

## [pe049395/Market-Making](https://github.com/pe049395/Market-Making)

Repository for market making ideas

🔗 [https://github.com/pe049395/Market-Making](https://github.com/pe049395/Market-Making)

---

## [QuantConnect/Lean](https://github.com/QuantConnect/Lean)

Lean Algorithmic Trading Engine by QuantConnect (Python, C#)

🔗 [https://github.com/QuantConnect/Lean](https://github.com/QuantConnect/Lean)

---

## [quantopian/zipline](https://github.com/quantopian/zipline)

Zipline, a Pythonic Algorithmic Trading Library

🔗 [https://github.com/quantopian/zipline](https://github.com/quantopian/zipline)

---

## [exchange-core/exchange-core](https://github.com/exchange-core/exchange-core)

Ultra-fast matching engine written in Java based on LMAX Disruptor, Eclipse Collections, Real Logic Agrona, OpenHFT, LZ4 Java, and Adaptive Radix Trees.

🔗 [https://github.com/exchange-core/exchange-core](https://github.com/exchange-core/exchange-core)

---

## [barter-rs/barter-rs](https://github.com/barter-rs/barter-rs)

Open-source Rust framework for building event-driven live-trading & backtesting systems

🔗 [https://github.com/barter-rs/barter-rs](https://github.com/barter-rs/barter-rs)

---

## [dineshpinto/orderbook-delta-bot](https://github.com/dineshpinto/orderbook-delta-bot)

A simple trading bot written in Rust based on counter-trading large deviations in the futures order book delta volume.

🔗 [https://github.com/dineshpinto/orderbook-delta-bot](https://github.com/dineshpinto/orderbook-delta-bot)

---

## [vladmeer/copy-trading-bot](https://github.com/vladmeer/copy-trading-bot)

Copy trading bot(copytrading bot): copy the trader's trading on solana, This copy trading bot can work on any DEXs on Solana

🔗 [https://github.com/vladmeer/copy-trading-bot](https://github.com/vladmeer/copy-trading-bot)

---

## [donewiththedollar/directionalscalper](https://github.com/donewiththedollar/directionalscalper)

CCXT based algorithmic trading framework for Bybit and other CCXT supported exchanges

🔗 [https://github.com/donewiththedollar/directionalscalper](https://github.com/donewiththedollar/directionalscalper)

---

## [skynetcap/openbook-mm](https://github.com/skynetcap/openbook-mm)

HFT market making client for openbook-dex

🔗 [https://github.com/skynetcap/openbook-mm](https://github.com/skynetcap/openbook-mm)

---

## [jshellen/HFT](https://github.com/jshellen/HFT)

High Frequency Market Making

🔗 [https://github.com/jshellen/HFT](https://github.com/jshellen/HFT)

---

## [robaho/go-trader](https://github.com/robaho/go-trader)

financial exchange written in Go, designed for algorithmic trading tests

🔗 [https://github.com/robaho/go-trader](https://github.com/robaho/go-trader)

---

## [alexnicholsamu/HFT-market-sim](https://github.com/alexnicholsamu/HFT-market-sim)

A HFT Market Simulation utilizing high-speed, efficient C++ and concurrent/parallel programming

🔗 [https://github.com/alexnicholsamu/HFT-market-sim](https://github.com/alexnicholsamu/HFT-market-sim)

---

## [hjk612/Financial-Computing-Project](https://github.com/hjk612/Financial-Computing-Project)

C++ trading strategy based on earning estimates and surprise

🔗 [https://github.com/hjk612/Financial-Computing-Project](https://github.com/hjk612/Financial-Computing-Project)

---

## [singhaniatanay/QuantFinance-Trading](https://github.com/singhaniatanay/QuantFinance-Trading)

Quantative Trading, building a trading strategy by generating alpha, optimizing a portfolio.

🔗 [https://github.com/singhaniatanay/QuantFinance-Trading](https://github.com/singhaniatanay/QuantFinance-Trading)

---

## [stellar-deprecated/kelp](https://github.com/stellar-deprecated/kelp)

Kelp is a free and open-source trading bot for the Stellar DEX and 100+ centralized exchanges

🔗 [https://github.com/stellar-deprecated/kelp](https://github.com/stellar-deprecated/kelp)

---

## [joelowj/awesome-algorithmic-trading](https://github.com/joelowj/awesome-algorithmic-trading)

A curated list of awesome algorithmic trading frameworks, libraries, software and resources

🔗 [https://github.com/joelowj/awesome-algorithmic-trading](https://github.com/joelowj/awesome-algorithmic-trading)

---

## [yato-sketch/trading-bot-solana](https://github.com/yato-sketch/trading-bot-solana)

Developed an automated trading bot for Solana, optimizing strategies for high-frequency trading and real-time market analysis

🔗 [https://github.com/yato-sketch/trading-bot-solana](https://github.com/yato-sketch/trading-bot-solana)

---

## [cutupdev/Solana-Copytrading-bot](https://github.com/cutupdev/Solana-Copytrading-bot)

Copy Trading: Solana copytrading bot source code, copy trading target wallet (pumpfun, pumpswap, raydium amm, cpmm, clmm)

🔗 [https://github.com/cutupdev/Solana-Copytrading-bot](https://github.com/cutupdev/Solana-Copytrading-bot)

---

## [nautechsystems/nautilus_trader](https://github.com/nautechsystems/nautilus_trader)

A high-performance algorithmic trading platform and event-driven backtester

🔗 [https://github.com/nautechsystems/nautilus_trader](https://github.com/nautechsystems/nautilus_trader)

---

## [gabriel-milan/btrader](https://github.com/gabriel-milan/btrader)

Triangle arbitrage trading bot for Binance

🔗 [https://github.com/gabriel-milan/btrader](https://github.com/gabriel-milan/btrader)

---

## [chugach-foundation/cypher-cli-v3](https://github.com/chugach-foundation/cypher-cli-v3)

command line utilities for cypher v3, including market making and liquidating

🔗 [https://github.com/chugach-foundation/cypher-cli-v3](https://github.com/chugach-foundation/cypher-cli-v3)

---

## [fedecaccia/avellaneda-stoikov](https://github.com/fedecaccia/avellaneda-stoikov)

Avellaneda-Stoikov HFT market making algorithm implementation

🔗 [https://github.com/fedecaccia/avellaneda-stoikov](https://github.com/fedecaccia/avellaneda-stoikov)

---

## [roq-trading/roq-algo](https://github.com/roq-trading/roq-algo)

C++ tools and utilities for algorithmic trading.

🔗 [https://github.com/roq-trading/roq-algo](https://github.com/roq-trading/roq-algo)

---

## [xreptoid/viperfish](https://github.com/xreptoid/viperfish)

Library for algorithmic trading

🔗 [https://github.com/xreptoid/viperfish](https://github.com/xreptoid/viperfish)

---

## [alpacahq/example-hftish](https://github.com/alpacahq/example-hftish)

Example Order Book Imbalance Algorithm

🔗 [https://github.com/alpacahq/example-hftish](https://github.com/alpacahq/example-hftish)

---

## [warp-id/solana-trading-bot](https://github.com/warp-id/solana-trading-bot)

Solana Trading Bot - Beta

🔗 [https://github.com/warp-id/solana-trading-bot](https://github.com/warp-id/solana-trading-bot)

---

## [MystenLabs/capybot](https://github.com/MystenLabs/capybot)

Automated trading bot

🔗 [https://github.com/MystenLabs/capybot](https://github.com/MystenLabs/capybot)

---

## [BitMEX/sample-market-maker](https://github.com/BitMEX/sample-market-maker)

Sample BitMEX Market Making Bot

🔗 [https://github.com/BitMEX/sample-market-maker](https://github.com/BitMEX/sample-market-maker)

---


[← Previous: Aldrin](aldrin.txt) | [🏠 Back to README](../README.md) | [Next: Analytics →](analytics.txt)
