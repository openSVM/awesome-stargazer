[← Previous: Biology](biology.txt) | [🏠 Back to README](../README.md) | [Next: Blockchain Analysis →](blockchain-analysis.txt)

---

# BITCOIN

**54 repositories**

---

## [bitpay/bitcore](https://github.com/bitpay/bitcore)

A full stack for bitcoin and blockchain-based applications

🔗 [https://github.com/bitpay/bitcore](https://github.com/bitpay/bitcore)

---

## [heliphix/btc_data](https://github.com/heliphix/btc_data)

This repository contains the code and datasets for creating the machine learning models in the research paper titled "Time-series forecasting of Bitcoin prices using high-dimensional features: a machine learning approach"

🔗 [https://github.com/heliphix/btc_data](https://github.com/heliphix/btc_data)

---

## [samre12/deep-trading-agent](https://github.com/samre12/deep-trading-agent)

Deep Reinforcement Learning based Trading Agent for Bitcoin

🔗 [https://github.com/samre12/deep-trading-agent](https://github.com/samre12/deep-trading-agent)

---

## [vkgnandhu177/Bayesian-Regression-and-Bitcoin](https://github.com/vkgnandhu177/Bayesian-Regression-and-Bitcoin)

# Bayesian-Regression-to-Predict-Bitcoin-Price-Variations Predicting the price variations of bitcoin, a virtual cryptographic currency. These predictions could be used as the foundation of a bitcoin trading strategy. To make these predictions, we will have to familiarize ourself with a machine learning technique, Bayesian Regression, and implement this technique in Python.  # Datasets We have the datasets in the data folder. The original raw data can be found here: http://api.bitcoincharts.com/v1/csv/. The datasets from this site have three attributes:   (1) time in epoch,   (2) price in USD per bitcoin, and   (3) bitcoin amount in a transaction (buy/sell).   However, only the first two attributes are relevant to this project.  To make the data to have evenly space records, we took all the records within a 20 second window and replaced it by a single record as the average of all the transaction prices in that window. Not every 20 second window had a record; therefore those missing entries were filled using the prices of the previous 20 observations and assuming a Gaussian distribution. The raw data that has been cleaned is given in the file dataset.csv  Finally, as discussed in the paper, the data was divided into a total of 9 different datasets. The whole dataset is partitioned into three equally sized (50 price variations in each) subsets: train1, train2, and test. The train sets are used for training a linear model, while the test set is for evaluation of the model. There are three csv files associated with each subset of data: *_90.csv, *_180.csv, and *_360.csv. In _90.csv, for example, each line represents a vector of length 90 where the elements are 30 minute worth of bitcoin price variations (since we have 20 second intervals) and a price variation in the 91st column. Similarly, the *_180.csv represents 60 minutes of prices and *_360.csv represents 120 minutes of prices.  # Project Requirements We are expected to implement the Bayesian Regression model to predict the future price variation of bitcoin as described in the reference paper. The main parts to focus on are Equation 6 and the Predicting Price Change section.  # Logic in bitcoin.py 1. Compute the price variations (Δp1, Δp2, and Δp3) for train2 using train1 as input to the Bayesian Regression equation (Equations 6). Make sure to use the similarity metric (Equation 9) in place of the Euclidean distance in Bayesian Regression (Equation 6).  2. Compute the linear regression parameters (w0, w1, w2, w3) by finding the best linear fit (Equation 8). Here you will need to use the ols function of statsmodels.formula.api. Your model should be fit using Δp1, Δp2, and Δp3 as the covariates. Note: the bitcoin order book data was not available, so you do not have to worry about the rw4 term.  3. Use the linear regression model computed in Step 2 and Bayesian Regression estimates, to predict the price variations for the test dataset. Bayesian Regression estimates for test dataset are computed in the same way as they are computed for train2 dataset – using train1 as an input.  4. Once the price variations are predicted, compute the mean squared error (MSE) for the test dataset (the test dataset has 50 vectors => 50 predictions).

🔗 [https://github.com/vkgnandhu177/Bayesian-Regression-and-Bitcoin](https://github.com/vkgnandhu177/Bayesian-Regression-and-Bitcoin)

---

## [f321x/lightningpicturebot](https://github.com/f321x/lightningpicturebot)

Telegram/Nostr bot for AI image generation with Bitcoin Lightning payments

🔗 [https://github.com/f321x/lightningpicturebot](https://github.com/f321x/lightningpicturebot)

---

## [KlausTrainer/twitcoin](https://github.com/KlausTrainer/twitcoin)

Send or receive bitcoins to any Twitter account

🔗 [https://github.com/KlausTrainer/twitcoin](https://github.com/KlausTrainer/twitcoin)

---

## [web3batman/Multi-Chain-Casino](https://github.com/web3batman/Multi-Chain-Casino)

Completed Casino(Crashr, Coinflip, Mines, BlackJack, etc) supported multi-chain(eth, sol, base, bitcoin, inj)

🔗 [https://github.com/web3batman/Multi-Chain-Casino](https://github.com/web3batman/Multi-Chain-Casino)

---

## [bitcoinbook/bitcoinbook](https://github.com/bitcoinbook/bitcoinbook)

Mastering Bitcoin 3rd Edition - Programming the Open Blockchain

🔗 [https://github.com/bitcoinbook/bitcoinbook](https://github.com/bitcoinbook/bitcoinbook)

---

## [shobrook/BitVision](https://github.com/shobrook/BitVision)

Trade Bitcoin and run forecasting models from the terminal

🔗 [https://github.com/shobrook/BitVision](https://github.com/shobrook/BitVision)

---

## [jlopp/physical-bitcoin-attacks](https://github.com/jlopp/physical-bitcoin-attacks)

A list of known attacks against Bitcoin / crypto asset owning entities that occurred in meatspace.

🔗 [https://github.com/jlopp/physical-bitcoin-attacks](https://github.com/jlopp/physical-bitcoin-attacks)

---

## [lightningames/p2porderbook](https://github.com/lightningames/p2porderbook)

bitcoin p2p orderbook bot

🔗 [https://github.com/lightningames/p2porderbook](https://github.com/lightningames/p2porderbook)

---

## [FungibilityMatters/MoneroMixer](https://github.com/FungibilityMatters/MoneroMixer)

The easiest way to use Monero to anonymously exchange and properly mix XMR, BTC, LTC, ETH, BCH, & 100+ other coins on Tails OS or Whonix.

🔗 [https://github.com/FungibilityMatters/MoneroMixer](https://github.com/FungibilityMatters/MoneroMixer)

---

## [hirosystems/clarinet](https://github.com/hirosystems/clarinet)

Write, test and deploy high-quality smart contracts to the Stacks blockchain and Bitcoin.

🔗 [https://github.com/hirosystems/clarinet](https://github.com/hirosystems/clarinet)

---

## [Superalgos/Superalgos](https://github.com/Superalgos/Superalgos)

Free, open-source crypto trading bot, automated bitcoin / cryptocurrency trading software, algorithmic trading bots. Visually design your crypto trading bot, leveraging an integrated charting system, data-mining, backtesting, paper trading, and multi-server crypto bot deployments.

🔗 [https://github.com/Superalgos/Superalgos](https://github.com/Superalgos/Superalgos)

---

## [jofpin/synthBTC](https://github.com/jofpin/synthBTC)

A tool that uses advanced Monte Carlo simulations and Turbit parallel processing to create possible Bitcoin prediction scenarios.

🔗 [https://github.com/jofpin/synthBTC](https://github.com/jofpin/synthBTC)

---

## [klever-io/kos-rs](https://github.com/klever-io/kos-rs)

kos-rs is an open-source library created by Klever to deliver fundamental low-level crypto wallet features for cross blockchains. Used for constructing secure and high-performing blockchain applications for Bitcoin, Ethereum, Solana, Klever and much More.

🔗 [https://github.com/klever-io/kos-rs](https://github.com/klever-io/kos-rs)

---

## [hirosystems/bitcoin-indexer](https://github.com/hirosystems/bitcoin-indexer)

Index Bitcoin meta-protocols like Ordinals, BRC-20, and Runes

🔗 [https://github.com/hirosystems/bitcoin-indexer](https://github.com/hirosystems/bitcoin-indexer)

---

## [HelloZeroNet/ZeroNet](https://github.com/HelloZeroNet/ZeroNet)

ZeroNet - Decentralized websites using Bitcoin crypto and BitTorrent network

🔗 [https://github.com/HelloZeroNet/ZeroNet](https://github.com/HelloZeroNet/ZeroNet)

---

## [fort-nix/nix-bitcoin](https://github.com/fort-nix/nix-bitcoin)

A collection of Nix packages and NixOS modules for easily installing full-featured Bitcoin nodes with an emphasis on security.

🔗 [https://github.com/fort-nix/nix-bitcoin](https://github.com/fort-nix/nix-bitcoin)

---

## [horizontalsystems/unstoppable-wallet-android](https://github.com/horizontalsystems/unstoppable-wallet-android)

A powerful non-custodial multi-wallet for Bitcoin, Ethereum, Binance Smart Chain, Avalanche, Solana and other blockchains. Non-custodial crypto and NFT storage, onchain decentralized exchange, institutional grade analytics for cryptcurrency and NFT markets, extensive privacy controls and human oriented design. Implemented on Kotlin.

🔗 [https://github.com/horizontalsystems/unstoppable-wallet-android](https://github.com/horizontalsystems/unstoppable-wallet-android)

---

## [paulcodrea/crypto_price_prediction](https://github.com/paulcodrea/crypto_price_prediction)

Bitcoin price prediction using both traditonal machine learning and deep learning techniques, based on historical price and sentiment extracted from Twitter posts. Fear of missing out analysis after Elon Musk tweeted about Dogecoin.

🔗 [https://github.com/paulcodrea/crypto_price_prediction](https://github.com/paulcodrea/crypto_price_prediction)

---

## [StockSharp/StockSharp](https://github.com/StockSharp/StockSharp)

Algorithmic trading and quantitative trading open source platform to develop trading robots (stock markets, forex, crypto, bitcoins, and options).

🔗 [https://github.com/StockSharp/StockSharp](https://github.com/StockSharp/StockSharp)

---

## [square/subzero](https://github.com/square/subzero)

Block's Bitcoin Cold Storage solution.

🔗 [https://github.com/square/subzero](https://github.com/square/subzero)

---

## [taoteh1221/Open_Crypto_Tracker](https://github.com/taoteh1221/Open_Crypto_Tracker)

Bitcoin / Alts private portfolio tracker, with email / text / alexa / telegram price alerts, charts, leverage support and much more.

🔗 [https://github.com/taoteh1221/Open_Crypto_Tracker](https://github.com/taoteh1221/Open_Crypto_Tracker)

---

## [nkaz001/algotrading-example](https://github.com/nkaz001/algotrading-example)

algorithmic trading backtest and optimization examples using order book imbalances. (bitcoin, cryptocurrency, bitmex, binance futures, market making)

🔗 [https://github.com/nkaz001/algotrading-example](https://github.com/nkaz001/algotrading-example)

---

## [MagicalBitcoin/libtor](https://github.com/MagicalBitcoin/libtor)

Bundle and run Tor inside your own project

🔗 [https://github.com/MagicalBitcoin/libtor](https://github.com/MagicalBitcoin/libtor)

---

## [parsevalbtc/cryptoeconomics-IT-translation](https://github.com/parsevalbtc/cryptoeconomics-IT-translation)

Criptoeconomia - Traduzione Italiana di Cryptoeconomics di Eric Voskuil

🔗 [https://github.com/parsevalbtc/cryptoeconomics-IT-translation](https://github.com/parsevalbtc/cryptoeconomics-IT-translation)

---

## [blockchain-etl/bitcoin-etl](https://github.com/blockchain-etl/bitcoin-etl)

ETL scripts for Bitcoin, Litecoin, Dash, Zcash, Doge, Bitcoin Cash. Available in Google BigQuery https://goo.gl/oY5BCQ

🔗 [https://github.com/blockchain-etl/bitcoin-etl](https://github.com/blockchain-etl/bitcoin-etl)

---

## [blockchain-etl/blockchain-etl-streaming](https://github.com/blockchain-etl/blockchain-etl-streaming)

Streaming Ethereum and Bitcoin blockchain data to Google Pub/Sub or Postgres in Kubernetes

🔗 [https://github.com/blockchain-etl/blockchain-etl-streaming](https://github.com/blockchain-etl/blockchain-etl-streaming)

---

## [mloporchio/BitcoinAddressClustering](https://github.com/mloporchio/BitcoinAddressClustering)

A C++ implementation of a Bitcoin address clustering procedure.

🔗 [https://github.com/mloporchio/BitcoinAddressClustering](https://github.com/mloporchio/BitcoinAddressClustering)

---

## [BlueWallet/BlueWallet](https://github.com/BlueWallet/BlueWallet)

Bitcoin wallet for iOS & Android. Built with React Native

🔗 [https://github.com/BlueWallet/BlueWallet](https://github.com/BlueWallet/BlueWallet)

---

## [bitauth/bitauth-ide](https://github.com/bitauth/bitauth-ide)

an online IDE for bitcoin and bitcoin cash contracts

🔗 [https://github.com/bitauth/bitauth-ide](https://github.com/bitauth/bitauth-ide)

---

## [paulmillr/tx-tor-broadcaster](https://github.com/paulmillr/tx-tor-broadcaster)

CLI utility that broadcasts BTC, ETH, SOL, ZEC & XMR transactions through TOR using public block explorers

🔗 [https://github.com/paulmillr/tx-tor-broadcaster](https://github.com/paulmillr/tx-tor-broadcaster)

---

## [cculianu/asicseer-pool](https://github.com/cculianu/asicseer-pool)

ASICseer Pool: Fast, C-based, multithreaded mining pool software for Bitcoin Cash

🔗 [https://github.com/cculianu/asicseer-pool](https://github.com/cculianu/asicseer-pool)

---

## [janoside/btc-rpc-explorer](https://github.com/janoside/btc-rpc-explorer)

Database-free, self-hosted Bitcoin explorer, via RPC to Bitcoin Core.

🔗 [https://github.com/janoside/btc-rpc-explorer](https://github.com/janoside/btc-rpc-explorer)

---

## [suleymanozkeskin/btc_aggregated_orderbook](https://github.com/suleymanozkeskin/btc_aggregated_orderbook)

C++ and Python app to create your custom orderbook.

🔗 [https://github.com/suleymanozkeskin/btc_aggregated_orderbook](https://github.com/suleymanozkeskin/btc_aggregated_orderbook)

---

## [LasticotSoftware/Astibot](https://github.com/LasticotSoftware/Astibot)

Astibot is a simple, visual and automated trading software for Coinbase Pro cryptocurrencies (Bitcoin trading bot)

🔗 [https://github.com/LasticotSoftware/Astibot](https://github.com/LasticotSoftware/Astibot)

---

## [pandoracore/typhon-spec](https://github.com/pandoracore/typhon-spec)

Trustless sidechains for Bitcoin network. Lightning ⚡️ brings thunderbolt 🌩 – Typhon 🐉 brings typhoon🌪

🔗 [https://github.com/pandoracore/typhon-spec](https://github.com/pandoracore/typhon-spec)

---

## [tidecoin-old/tidecoin](https://github.com/tidecoin-old/tidecoin)

Tidecoin: Open Source Post-Quantum Security Bitcoin

🔗 [https://github.com/tidecoin-old/tidecoin](https://github.com/tidecoin-old/tidecoin)

---

## [zig-bitcoin/btczee](https://github.com/zig-bitcoin/btczee)

Bitcoin protocol implementation in Zig.

🔗 [https://github.com/zig-bitcoin/btczee](https://github.com/zig-bitcoin/btczee)

---

## [zig-bitcoin/bitcoin-primitives](https://github.com/zig-bitcoin/bitcoin-primitives)

Libraries and primitives for Bitcoin, written in Zig.

🔗 [https://github.com/zig-bitcoin/bitcoin-primitives](https://github.com/zig-bitcoin/bitcoin-primitives)

---

## [Jonatanc05/ZiglyNode](https://github.com/Jonatanc05/ZiglyNode)

A Bitcoin light client with minimal dependencies written in Zig

🔗 [https://github.com/Jonatanc05/ZiglyNode](https://github.com/Jonatanc05/ZiglyNode)

---

## [shilch/fastmerkle](https://github.com/shilch/fastmerkle)

Compute bitcoin Merkle trees on your GPU

🔗 [https://github.com/shilch/fastmerkle](https://github.com/shilch/fastmerkle)

---

## [420Sec/420coin](https://github.com/420Sec/420coin)

Bitcoin Core integration/staging tree

🔗 [https://github.com/420Sec/420coin](https://github.com/420Sec/420coin)

---

## [goatbtc/tuipool](https://github.com/goatbtc/tuipool)

tuipool - mempool tui visualizer

🔗 [https://github.com/goatbtc/tuipool](https://github.com/goatbtc/tuipool)

---

## [Yona-Labs/bitcoin-svm-bridge](https://github.com/Yona-Labs/bitcoin-svm-bridge)



🔗 [https://github.com/Yona-Labs/bitcoin-svm-bridge](https://github.com/Yona-Labs/bitcoin-svm-bridge)

---

## [lightningnetwork/lightning-onion](https://github.com/lightningnetwork/lightning-onion)

Onion Routed Micropayments for the Lightning Network

🔗 [https://github.com/lightningnetwork/lightning-onion](https://github.com/lightningnetwork/lightning-onion)

---

## [bitcoin/bitcoin](https://github.com/bitcoin/bitcoin)

Bitcoin Core integration/staging tree

🔗 [https://github.com/bitcoin/bitcoin](https://github.com/bitcoin/bitcoin)

---

## [bitcoin-core/ctaes](https://github.com/bitcoin-core/ctaes)

Simple constant-time AES implementation

🔗 [https://github.com/bitcoin-core/ctaes](https://github.com/bitcoin-core/ctaes)

---

## [emeraldpay/dshackle](https://github.com/emeraldpay/dshackle)

Fault Tolerant Load Balancer for Ethereum and Bitcoin APIs

🔗 [https://github.com/emeraldpay/dshackle](https://github.com/emeraldpay/dshackle)

---

## [stacks-archive/sbtc-developer-release](https://github.com/stacks-archive/sbtc-developer-release)

sBTC primitives, signer components, helper tools

🔗 [https://github.com/stacks-archive/sbtc-developer-release](https://github.com/stacks-archive/sbtc-developer-release)

---

## [jamaljsr/polar](https://github.com/jamaljsr/polar)

One-click Bitcoin Lightning networks for local app development & testing

🔗 [https://github.com/jamaljsr/polar](https://github.com/jamaljsr/polar)

---

## [bernardladenthin/BitcoinAddressFinder](https://github.com/bernardladenthin/BitcoinAddressFinder)

A high performance bitcoin address finder.

🔗 [https://github.com/bernardladenthin/BitcoinAddressFinder](https://github.com/bernardladenthin/BitcoinAddressFinder)

---


[← Previous: Biology](biology.txt) | [🏠 Back to README](../README.md) | [Next: Blockchain Analysis →](blockchain-analysis.txt)
