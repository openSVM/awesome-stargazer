[← Previous: Reverse Engineering Other](reverse-engineering-other.txt) | [🏠 Back to README](../README.md) | [Next: Rl Environments →](rl-environments.txt)

---

# RL ALGORITHMS

**17 repositories**

---

## [moeru-ai/airi](https://github.com/moeru-ai/airi)

💖🧸 Self hosted, you owned Grok Companion, a container of souls of waifu, cyber livings to bring them into our worlds, wishing to achieve Neuro-sama's altitude. Capable of realtime voice chat, Minecraft, Factorio playing. Web / macOS / Windows supported.

🔗 [https://github.com/moeru-ai/airi](https://github.com/moeru-ai/airi)

---

## [pramalhe/RedoDB](https://github.com/pramalhe/RedoDB)

The world's first wait-free KV store with generic durable linearizable transactions

🔗 [https://github.com/pramalhe/RedoDB](https://github.com/pramalhe/RedoDB)

---

## [vkgnandhu177/Bayesian-Regression-and-Bitcoin](https://github.com/vkgnandhu177/Bayesian-Regression-and-Bitcoin)

# Bayesian-Regression-to-Predict-Bitcoin-Price-Variations Predicting the price variations of bitcoin, a virtual cryptographic currency. These predictions could be used as the foundation of a bitcoin trading strategy. To make these predictions, we will have to familiarize ourself with a machine learning technique, Bayesian Regression, and implement this technique in Python.  # Datasets We have the datasets in the data folder. The original raw data can be found here: http://api.bitcoincharts.com/v1/csv/. The datasets from this site have three attributes:   (1) time in epoch,   (2) price in USD per bitcoin, and   (3) bitcoin amount in a transaction (buy/sell).   However, only the first two attributes are relevant to this project.  To make the data to have evenly space records, we took all the records within a 20 second window and replaced it by a single record as the average of all the transaction prices in that window. Not every 20 second window had a record; therefore those missing entries were filled using the prices of the previous 20 observations and assuming a Gaussian distribution. The raw data that has been cleaned is given in the file dataset.csv  Finally, as discussed in the paper, the data was divided into a total of 9 different datasets. The whole dataset is partitioned into three equally sized (50 price variations in each) subsets: train1, train2, and test. The train sets are used for training a linear model, while the test set is for evaluation of the model. There are three csv files associated with each subset of data: *_90.csv, *_180.csv, and *_360.csv. In _90.csv, for example, each line represents a vector of length 90 where the elements are 30 minute worth of bitcoin price variations (since we have 20 second intervals) and a price variation in the 91st column. Similarly, the *_180.csv represents 60 minutes of prices and *_360.csv represents 120 minutes of prices.  # Project Requirements We are expected to implement the Bayesian Regression model to predict the future price variation of bitcoin as described in the reference paper. The main parts to focus on are Equation 6 and the Predicting Price Change section.  # Logic in bitcoin.py 1. Compute the price variations (Δp1, Δp2, and Δp3) for train2 using train1 as input to the Bayesian Regression equation (Equations 6). Make sure to use the similarity metric (Equation 9) in place of the Euclidean distance in Bayesian Regression (Equation 6).  2. Compute the linear regression parameters (w0, w1, w2, w3) by finding the best linear fit (Equation 8). Here you will need to use the ols function of statsmodels.formula.api. Your model should be fit using Δp1, Δp2, and Δp3 as the covariates. Note: the bitcoin order book data was not available, so you do not have to worry about the rw4 term.  3. Use the linear regression model computed in Step 2 and Bayesian Regression estimates, to predict the price variations for the test dataset. Bayesian Regression estimates for test dataset are computed in the same way as they are computed for train2 dataset – using train1 as an input.  4. Once the price variations are predicted, compute the mean squared error (MSE) for the test dataset (the test dataset has 50 vectors => 50 predictions).

🔗 [https://github.com/vkgnandhu177/Bayesian-Regression-and-Bitcoin](https://github.com/vkgnandhu177/Bayesian-Regression-and-Bitcoin)

---

## [microsoft/qlib](https://github.com/microsoft/qlib)

Qlib is an AI-oriented Quant investment platform that aims to use AI tech to empower Quant Research, from exploring ideas to implementing productions. Qlib supports diverse ML modeling paradigms, including supervised learning, market dynamics modeling, and RL, and is now equipped with https://github.com/microsoft/RD-Agent to automate R&D process.

🔗 [https://github.com/microsoft/qlib](https://github.com/microsoft/qlib)

---

## [sadighian/crypto-rl](https://github.com/sadighian/crypto-rl)

Deep Reinforcement Learning toolkit: record and replay cryptocurrency limit order book data & train a DDQN agent

🔗 [https://github.com/sadighian/crypto-rl](https://github.com/sadighian/crypto-rl)

---

## [dexterlaboss/archival-rpc](https://github.com/dexterlaboss/archival-rpc)

Lite RPC with small memory footprint that supports full archives on prem with HBase

🔗 [https://github.com/dexterlaboss/archival-rpc](https://github.com/dexterlaboss/archival-rpc)

---

## [hyprwm/Hyprland](https://github.com/hyprwm/Hyprland)

Hyprland is an independent, highly customizable, dynamic tiling Wayland compositor that doesn't sacrifice on its looks.

🔗 [https://github.com/hyprwm/Hyprland](https://github.com/hyprwm/Hyprland)

---

## [sxzz/telegram-bot-starter](https://github.com/sxzz/telegram-bot-starter)

A starter template for Telegram bots on Serverless, with Vercel, Netlify, Cloudflare, and more support.

🔗 [https://github.com/sxzz/telegram-bot-starter](https://github.com/sxzz/telegram-bot-starter)

---

## [StarRocks/starrocks](https://github.com/StarRocks/starrocks)

The world's fastest open query engine for sub-second analytics both on and off the data lakehouse. With the flexibility to support nearly any scenario, StarRocks provides best-in-class performance for multi-dimensional analytics, real-time analytics, and ad-hoc queries. A Linux Foundation project.

🔗 [https://github.com/StarRocks/starrocks](https://github.com/StarRocks/starrocks)

---

## [carl-erwin/unlimited](https://github.com/carl-erwin/unlimited)

An experimental text editor written in Rust with very large file support

🔗 [https://github.com/carl-erwin/unlimited](https://github.com/carl-erwin/unlimited)

---

## [jetli/rust-yew-realworld-example-app](https://github.com/jetli/rust-yew-realworld-example-app)

Exemplary real world app built with Rust + Yew + WebAssembly, by Function Components + Hooks, also supports desktop by Tauri.

🔗 [https://github.com/jetli/rust-yew-realworld-example-app](https://github.com/jetli/rust-yew-realworld-example-app)

---

## [asdf-vm/asdf](https://github.com/asdf-vm/asdf)

Extendable version manager with support for Ruby, Node.js, Elixir, Erlang & more

🔗 [https://github.com/asdf-vm/asdf](https://github.com/asdf-vm/asdf)

---

## [SpiderLabs/Responder](https://github.com/SpiderLabs/Responder)

Responder is a LLMNR, NBT-NS and MDNS poisoner, with built-in HTTP/SMB/MSSQL/FTP/LDAP rogue authentication server supporting NTLMv1/NTLMv2/LMv2, Extended Security NTLMSSP and Basic HTTP authentication.

🔗 [https://github.com/SpiderLabs/Responder](https://github.com/SpiderLabs/Responder)

---

## [dex-guru/meta-aggregation-api](https://github.com/dex-guru/meta-aggregation-api)

Meta Aggregation API serves as a wrapper for multiple DEX aggregators(Routers) and finds the best price and route for token swap orders between quotes from supported routers. API provides a unified interface wrapping up differences between underlying  DEX aggregators.

🔗 [https://github.com/dex-guru/meta-aggregation-api](https://github.com/dex-guru/meta-aggregation-api)

---

## [codingo/Interlace](https://github.com/codingo/Interlace)

Easily turn single threaded command line applications into a fast, multi-threaded application with CIDR and glob support.

🔗 [https://github.com/codingo/Interlace](https://github.com/codingo/Interlace)

---

## [stef/libopaque](https://github.com/stef/libopaque)

c implementation of the OPAQUE protocol with bindings for python, php, ruby, lua, zig, java, erlang, golang, js and SASL. also supports a threshold variants based on 2hashdh and 3hashtdh

🔗 [https://github.com/stef/libopaque](https://github.com/stef/libopaque)

---

## [TeamRaccoons/sherlock-wallet](https://github.com/TeamRaccoons/sherlock-wallet)

Use any public key wallet to try a dApp and inspect signTransaction calls

🔗 [https://github.com/TeamRaccoons/sherlock-wallet](https://github.com/TeamRaccoons/sherlock-wallet)

---


[← Previous: Reverse Engineering Other](reverse-engineering-other.txt) | [🏠 Back to README](../README.md) | [Next: Rl Environments →](rl-environments.txt)
