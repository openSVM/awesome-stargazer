[← Previous: Astro Telescope](astro-telescope.txt) | [🏠 Back to README](../README.md) | [Next: Astronomy Other 2 →](astronomy-other-2.txt)

---

# ASTRONOMY OTHER 1

**90 repositories**

---

## [ErrorAtLine0/infinipaint](https://github.com/ErrorAtLine0/infinipaint)

Infinite space, infinite zoom, collaborative canvas program for massive sketches and notes

🔗 [https://github.com/ErrorAtLine0/infinipaint](https://github.com/ErrorAtLine0/infinipaint)

---

## [koekeishiya/yabai](https://github.com/koekeishiya/yabai)

A tiling window manager for macOS based on binary space partitioning

🔗 [https://github.com/koekeishiya/yabai](https://github.com/koekeishiya/yabai)

---

## [naikari/naikari](https://github.com/naikari/naikari)

2-D creative exploration-driven space trading and mercenary sandbox game.

🔗 [https://github.com/naikari/naikari](https://github.com/naikari/naikari)

---

## [swyxio/ai-notes](https://github.com/swyxio/ai-notes)

notes for software engineers getting up to speed on new AI developments. Serves as datastore for https://latent.space writing, and product brainstorming, but has cleaned up canonical references under the /Resources folder.

🔗 [https://github.com/swyxio/ai-notes](https://github.com/swyxio/ai-notes)

---

## [bosun-ai/derrick](https://github.com/bosun-ai/derrick)

Service for provisioning workspaces for autonomous coding agents to do work in.

🔗 [https://github.com/bosun-ai/derrick](https://github.com/bosun-ai/derrick)

---

## [stacklok/codegate](https://github.com/stacklok/codegate)

CodeGate: Security, Workspaces and Multiplexing for AI Agentic Frameworks

🔗 [https://github.com/stacklok/codegate](https://github.com/stacklok/codegate)

---

## [felladrin/MiniSearch](https://github.com/felladrin/MiniSearch)

Minimalist web-searching platform with an AI assistant that runs directly from your browser. Uses WebLLM, Wllama and SearXNG. Demo: https://felladrin-minisearch.hf.space

🔗 [https://github.com/felladrin/MiniSearch](https://github.com/felladrin/MiniSearch)

---

## [felladrin/awesome-ai-web-search](https://github.com/felladrin/awesome-ai-web-search)

List of software that allows searching the web with the assistance of AI: https://hf.co/spaces/felladrin/awesome-ai-web-search

🔗 [https://github.com/felladrin/awesome-ai-web-search](https://github.com/felladrin/awesome-ai-web-search)

---

## [Draradech/NewtonWars](https://github.com/Draradech/NewtonWars)

NewtonWars is a space battle game. Gravity is the main theme, influencing the path of your missiles around numerous planets on the battlefield.

🔗 [https://github.com/Draradech/NewtonWars](https://github.com/Draradech/NewtonWars)

---

## [HazyResearch/H3](https://github.com/HazyResearch/H3)

Language Modeling with the H3 State Space Model

🔗 [https://github.com/HazyResearch/H3](https://github.com/HazyResearch/H3)

---

## [lucidrains/token-shift-gpt](https://github.com/lucidrains/token-shift-gpt)

Implementation of Token Shift GPT - An autoregressive model that solely relies on shifting the sequence space for mixing

🔗 [https://github.com/lucidrains/token-shift-gpt](https://github.com/lucidrains/token-shift-gpt)

---

## [rainner/wormhole-extreme](https://github.com/rainner/wormhole-extreme)

This is an experimental interactive space scene rendered on the browser using WebGL and Three.js with Javascript. The 3D scene contains planets, stars and a nebula effect that changes color and warps into a "wormhole" effect to create the illusion of traveling through space.

🔗 [https://github.com/rainner/wormhole-extreme](https://github.com/rainner/wormhole-extreme)

---

## [finos/ai-readiness](https://github.com/finos/ai-readiness)

The AI Readiness SIG provides a space to address AI-related challenges that are common to all members.

🔗 [https://github.com/finos/ai-readiness](https://github.com/finos/ai-readiness)

---

## [TMElyralab/MuseTalk](https://github.com/TMElyralab/MuseTalk)

MuseTalk: Real-Time High Quality Lip Synchorization with Latent Space Inpainting

🔗 [https://github.com/TMElyralab/MuseTalk](https://github.com/TMElyralab/MuseTalk)

---

## [jwest951227/aiSocialGood](https://github.com/jwest951227/aiSocialGood)

The rise of social media and online communities creates safe and anonymous spaces for individuals to share their thoughts about their mental health and express their feelings and sufferings in online communities. To prevent suicide, it is necessary to detect suicide-related posts and user's suicide ideation in cyberspace by natural language process

🔗 [https://github.com/jwest951227/aiSocialGood](https://github.com/jwest951227/aiSocialGood)

---

## [vkgnandhu177/Bayesian-Regression-and-Bitcoin](https://github.com/vkgnandhu177/Bayesian-Regression-and-Bitcoin)

# Bayesian-Regression-to-Predict-Bitcoin-Price-Variations Predicting the price variations of bitcoin, a virtual cryptographic currency. These predictions could be used as the foundation of a bitcoin trading strategy. To make these predictions, we will have to familiarize ourself with a machine learning technique, Bayesian Regression, and implement this technique in Python.  # Datasets We have the datasets in the data folder. The original raw data can be found here: http://api.bitcoincharts.com/v1/csv/. The datasets from this site have three attributes:   (1) time in epoch,   (2) price in USD per bitcoin, and   (3) bitcoin amount in a transaction (buy/sell).   However, only the first two attributes are relevant to this project.  To make the data to have evenly space records, we took all the records within a 20 second window and replaced it by a single record as the average of all the transaction prices in that window. Not every 20 second window had a record; therefore those missing entries were filled using the prices of the previous 20 observations and assuming a Gaussian distribution. The raw data that has been cleaned is given in the file dataset.csv  Finally, as discussed in the paper, the data was divided into a total of 9 different datasets. The whole dataset is partitioned into three equally sized (50 price variations in each) subsets: train1, train2, and test. The train sets are used for training a linear model, while the test set is for evaluation of the model. There are three csv files associated with each subset of data: *_90.csv, *_180.csv, and *_360.csv. In _90.csv, for example, each line represents a vector of length 90 where the elements are 30 minute worth of bitcoin price variations (since we have 20 second intervals) and a price variation in the 91st column. Similarly, the *_180.csv represents 60 minutes of prices and *_360.csv represents 120 minutes of prices.  # Project Requirements We are expected to implement the Bayesian Regression model to predict the future price variation of bitcoin as described in the reference paper. The main parts to focus on are Equation 6 and the Predicting Price Change section.  # Logic in bitcoin.py 1. Compute the price variations (Δp1, Δp2, and Δp3) for train2 using train1 as input to the Bayesian Regression equation (Equations 6). Make sure to use the similarity metric (Equation 9) in place of the Euclidean distance in Bayesian Regression (Equation 6).  2. Compute the linear regression parameters (w0, w1, w2, w3) by finding the best linear fit (Equation 8). Here you will need to use the ols function of statsmodels.formula.api. Your model should be fit using Δp1, Δp2, and Δp3 as the covariates. Note: the bitcoin order book data was not available, so you do not have to worry about the rw4 term.  3. Use the linear regression model computed in Step 2 and Bayesian Regression estimates, to predict the price variations for the test dataset. Bayesian Regression estimates for test dataset are computed in the same way as they are computed for train2 dataset – using train1 as an input.  4. Once the price variations are predicted, compute the mean squared error (MSE) for the test dataset (the test dataset has 50 vectors => 50 predictions).

🔗 [https://github.com/vkgnandhu177/Bayesian-Regression-and-Bitcoin](https://github.com/vkgnandhu177/Bayesian-Regression-and-Bitcoin)

---

## [XanaduAI/MrMustard](https://github.com/XanaduAI/MrMustard)

A differentiable bridge between phase space and Fock space

🔗 [https://github.com/XanaduAI/MrMustard](https://github.com/XanaduAI/MrMustard)

---

## [netblue30/firejail](https://github.com/netblue30/firejail)

Linux namespaces and seccomp-bpf sandbox

🔗 [https://github.com/netblue30/firejail](https://github.com/netblue30/firejail)

---

## [teambit/bit](https://github.com/teambit/bit)

AI-powered development workspaces with reusable components, architectural clarity and zero overhead.

🔗 [https://github.com/teambit/bit](https://github.com/teambit/bit)

---

## [ClickHouse/nsjail](https://github.com/ClickHouse/nsjail)

A lightweight process isolation tool that utilizes Linux namespaces, cgroups, rlimits and seccomp-bpf syscall filters, leveraging the Kafel BPF language for enhanced security.

🔗 [https://github.com/ClickHouse/nsjail](https://github.com/ClickHouse/nsjail)

---

## [jlopp/physical-bitcoin-attacks](https://github.com/jlopp/physical-bitcoin-attacks)

A list of known attacks against Bitcoin / crypto asset owning entities that occurred in meatspace.

🔗 [https://github.com/jlopp/physical-bitcoin-attacks](https://github.com/jlopp/physical-bitcoin-attacks)

---

## [imsnif/diskonaut](https://github.com/imsnif/diskonaut)

Terminal disk space navigator 🔭

🔗 [https://github.com/imsnif/diskonaut](https://github.com/imsnif/diskonaut)

---

## [aesophor/wmderland](https://github.com/aesophor/wmderland)

🌳 X11 tiling window manager using space partitioning trees

🔗 [https://github.com/aesophor/wmderland](https://github.com/aesophor/wmderland)

---

## [haroldadmin/MoonShot](https://github.com/haroldadmin/MoonShot)

A SpaceX companion app for Android

🔗 [https://github.com/haroldadmin/MoonShot](https://github.com/haroldadmin/MoonShot)

---

## [momo5502/sogen](https://github.com/momo5502/sogen)

🪅 Windows User Space Emulator

🔗 [https://github.com/momo5502/sogen](https://github.com/momo5502/sogen)

---

## [raybbian/hyprtasking](https://github.com/raybbian/hyprtasking)

Powerful workspace management plugin, packed with features

🔗 [https://github.com/raybbian/hyprtasking](https://github.com/raybbian/hyprtasking)

---

## [tonsky/FiraCode](https://github.com/tonsky/FiraCode)

Free monospaced font with programming ligatures

🔗 [https://github.com/tonsky/FiraCode](https://github.com/tonsky/FiraCode)

---

## [thkruz/keeptrack.space](https://github.com/thkruz/keeptrack.space)

🌎📡 TypeScript Astrodynamics Software for Non-Engineers. 3D Visualization of satellite data and the sensors that track them.

🔗 [https://github.com/thkruz/keeptrack.space](https://github.com/thkruz/keeptrack.space)

---

## [iovisor/ubpf](https://github.com/iovisor/ubpf)

Userspace eBPF VM

🔗 [https://github.com/iovisor/ubpf](https://github.com/iovisor/ubpf)

---

## [pmndrs/triplex](https://github.com/pmndrs/triplex)

The open source visual workspace for React / Three Fiber. Build the 2D and 3D web.

🔗 [https://github.com/pmndrs/triplex](https://github.com/pmndrs/triplex)

---

## [ashvardanian/less_slow.cpp](https://github.com/ashvardanian/less_slow.cpp)

Playing around "Less Slow" coding practices in C++ 20, C, CUDA, PTX, & Assembly, from numerics & SIMD to coroutines, ranges, exception handling, networking and user-space IO

🔗 [https://github.com/ashvardanian/less_slow.cpp](https://github.com/ashvardanian/less_slow.cpp)

---

## [alecbcs/hyprspace](https://github.com/alecbcs/hyprspace)

A Lightweight VPN Built on top of IPFS + Libp2p for Truly Distributed Networks.

🔗 [https://github.com/alecbcs/hyprspace](https://github.com/alecbcs/hyprspace)

---

## [dilanx/flutter-codespaces](https://github.com/dilanx/flutter-codespaces)

Use Flutter on GitHub Codespaces

🔗 [https://github.com/dilanx/flutter-codespaces](https://github.com/dilanx/flutter-codespaces)

---

## [Rahullkumr/Flutter-Codespace](https://github.com/Rahullkumr/Flutter-Codespace)

Develop Flutter Apps in the Cloud using GitHub CodeSpaces

🔗 [https://github.com/Rahullkumr/Flutter-Codespace](https://github.com/Rahullkumr/Flutter-Codespace)

---

## [cmacrae/spacebar](https://github.com/cmacrae/spacebar)

A minimal status bar for macOS. Ideal for use with tiling window managers like yabai

🔗 [https://github.com/cmacrae/spacebar](https://github.com/cmacrae/spacebar)

---

## [openSVM/svm-pay](https://github.com/openSVM/svm-pay)

pay and accept payments from anywhere in the world from any solana-vm based network!  works in any country even in space!

🔗 [https://github.com/openSVM/svm-pay](https://github.com/openSVM/svm-pay)

---

## [HITsz-TMG/FilmAgent](https://github.com/HITsz-TMG/FilmAgent)

Resources of our paper "FilmAgent: A Multi-Agent Framework for End-to-End Film Automation in Virtual 3D Spaces". New versions in the making!

🔗 [https://github.com/HITsz-TMG/FilmAgent](https://github.com/HITsz-TMG/FilmAgent)

---

## [cedricschwyter/spacey](https://github.com/cedricschwyter/spacey)

a tiny, wasm-ready virtual machine - stupidly fast

🔗 [https://github.com/cedricschwyter/spacey](https://github.com/cedricschwyter/spacey)

---

## [opencog/atomspace](https://github.com/opencog/atomspace)

The OpenCog (hyper-)graph database and graph rewriting system

🔗 [https://github.com/opencog/atomspace](https://github.com/opencog/atomspace)

---

## [vii5ard/whitespace](https://github.com/vii5ard/whitespace)

An Online Whitesspace compiler, virtual machine and IDE

🔗 [https://github.com/vii5ard/whitespace](https://github.com/vii5ard/whitespace)

---

## [Visual-Code-Space/Visual-Code-Space](https://github.com/Visual-Code-Space/Visual-Code-Space)

A Modern Code Editor for Android

🔗 [https://github.com/Visual-Code-Space/Visual-Code-Space](https://github.com/Visual-Code-Space/Visual-Code-Space)

---

## [eunomia-bpf/mini-ubpf](https://github.com/eunomia-bpf/mini-ubpf)

A portable minimal userspace eBPF vm and jit library

🔗 [https://github.com/eunomia-bpf/mini-ubpf](https://github.com/eunomia-bpf/mini-ubpf)

---

## [joreilly/PeopleInSpace](https://github.com/joreilly/PeopleInSpace)

Kotlin Multiplatform sample with SwiftUI, Jetpack Compose, Compose for Wear, Compose for Desktop, and Compose for Web clients along with Ktor backend.

🔗 [https://github.com/joreilly/PeopleInSpace](https://github.com/joreilly/PeopleInSpace)

---

## [tauri-apps/plugins-workspace](https://github.com/tauri-apps/plugins-workspace)

All of the official Tauri plugins in one place!

🔗 [https://github.com/tauri-apps/plugins-workspace](https://github.com/tauri-apps/plugins-workspace)

---

## [smcameron/space-nerds-in-space](https://github.com/smcameron/space-nerds-in-space)

Multi-player spaceship bridge simulator game. Captain your starship through adventures with your friends.  See https://smcameron.github.io/space-nerds-in-space

🔗 [https://github.com/smcameron/space-nerds-in-space](https://github.com/smcameron/space-nerds-in-space)

---

## [barkerbg001/echo-valley](https://github.com/barkerbg001/echo-valley)

Echo Valley is a procedurally generated 3D environment built with WebGL and Three.js. It offers an expansive, evolving world for exploration and experimentation, showcasing procedural generation in 3D. Whether you're a developer or just love endless virtual spaces, Echo Valley is a captivating sandbox to explore.

🔗 [https://github.com/barkerbg001/echo-valley](https://github.com/barkerbg001/echo-valley)

---

## [gaskam/workspace](https://github.com/gaskam/workspace)

Workspace is a powerful application designed to install and manage all your repositories in your chosen destination.

🔗 [https://github.com/gaskam/workspace](https://github.com/gaskam/workspace)

---

## [spacejam/tla-rust](https://github.com/spacejam/tla-rust)

writing correct lock-free and distributed stateful systems in Rust, assisted by TLA+

🔗 [https://github.com/spacejam/tla-rust](https://github.com/spacejam/tla-rust)

---

## [Chongjie-Si/Subspace-Tuning](https://github.com/Chongjie-Si/Subspace-Tuning)

A generalized framework for subspace tuning methods in parameter efficient fine-tuning.

🔗 [https://github.com/Chongjie-Si/Subspace-Tuning](https://github.com/Chongjie-Si/Subspace-Tuning)

---

## [gvinciguerra/PGM-index](https://github.com/gvinciguerra/PGM-index)

🏅State-of-the-art learned data structure that enables fast lookup, predecessor, range searches and updates in arrays of billions of items using orders of magnitude less space than traditional indexes

🔗 [https://github.com/gvinciguerra/PGM-index](https://github.com/gvinciguerra/PGM-index)

---

## [pioneerspacesim/pioneer](https://github.com/pioneerspacesim/pioneer)

A game of lonely space adventure

🔗 [https://github.com/pioneerspacesim/pioneer](https://github.com/pioneerspacesim/pioneer)

---

## [fabiensanglard/st](https://github.com/fabiensanglard/st)

Command Space-Time explorer

🔗 [https://github.com/fabiensanglard/st](https://github.com/fabiensanglard/st)

---

## [stojanovic/space-explorer-bot](https://github.com/stojanovic/space-explorer-bot)

A small FB Messenger chat bot using NASA API and Claudia Bot Builder.

🔗 [https://github.com/stojanovic/space-explorer-bot](https://github.com/stojanovic/space-explorer-bot)

---

## [Vivero/Kerbal-VR](https://github.com/Vivero/Kerbal-VR)

An add-on for Kerbal Space Program (KSP) to enable virtual reality.

🔗 [https://github.com/Vivero/Kerbal-VR](https://github.com/Vivero/Kerbal-VR)

---

## [jalmasi/vrspace](https://github.com/jalmasi/vrspace)

VRSpace: Multiuser Virtual Reality Engine

🔗 [https://github.com/jalmasi/vrspace](https://github.com/jalmasi/vrspace)

---

## [ricott1/rebels-in-the-sky](https://github.com/ricott1/rebels-in-the-sky)

P2P terminal game about spacepirates playing basketball across the galaxy

🔗 [https://github.com/ricott1/rebels-in-the-sky](https://github.com/ricott1/rebels-in-the-sky)

---

## [openacid/slim](https://github.com/openacid/slim)

Surprisingly space efficient trie in Golang(11 bits/key; 100 ns/get).

🔗 [https://github.com/openacid/slim](https://github.com/openacid/slim)

---

## [ChASE-library/ChASE](https://github.com/ChASE-library/ChASE)

This repository mirrors the principal Gitlab repository of the Chebyshev Accelerated Subspace iteration Eigensolver. If you want to contribute as developer to this project please contact e.di.napoli@fz-juelich.de.

🔗 [https://github.com/ChASE-library/ChASE](https://github.com/ChASE-library/ChASE)

---

## [dftfeDevelopers/dftfe](https://github.com/dftfeDevelopers/dftfe)

DFT-FE: Real-space DFT calculations using Finite Elements

🔗 [https://github.com/dftfeDevelopers/dftfe](https://github.com/dftfeDevelopers/dftfe)

---

## [jasonzhang8801/linda_tuple_space](https://github.com/jasonzhang8801/linda_tuple_space)

distributed P2P system

🔗 [https://github.com/jasonzhang8801/linda_tuple_space](https://github.com/jasonzhang8801/linda_tuple_space)

---

## [krinkinmu/userspace-threads](https://github.com/krinkinmu/userspace-threads)

Userspace implementation of preemptive multithreading

🔗 [https://github.com/krinkinmu/userspace-threads](https://github.com/krinkinmu/userspace-threads)

---

## [aritra90/TeraPCA](https://github.com/aritra90/TeraPCA)

TeraPCA is a multithreaded C++ software suite based on Intel's MKL library (or any other BLAS and/or LAPACK distribution). TeraPCA features no dependencies to external libraries and combines the robustness of subspace iteration with the power of randomization.

🔗 [https://github.com/aritra90/TeraPCA](https://github.com/aritra90/TeraPCA)

---

## [enfiskutensykkel/ssd-gpu-dma](https://github.com/enfiskutensykkel/ssd-gpu-dma)

Build userspace NVMe drivers and storage applications with CUDA support

🔗 [https://github.com/enfiskutensykkel/ssd-gpu-dma](https://github.com/enfiskutensykkel/ssd-gpu-dma)

---

## [codespaces-examples/base](https://github.com/codespaces-examples/base)

A basic Codespaces environment that can be expanded upon to build your ideal environment

🔗 [https://github.com/codespaces-examples/base](https://github.com/codespaces-examples/base)

---

## [Lamden/flora](https://github.com/Lamden/flora)

A distributed smart contract package manager to create a better and shared authority in the space.

🔗 [https://github.com/Lamden/flora](https://github.com/Lamden/flora)

---

## [eunomia-bpf/bpf-benchmark](https://github.com/eunomia-bpf/bpf-benchmark)

Userspace eBPF Runtime Benchmarking Test Suite and Results

🔗 [https://github.com/eunomia-bpf/bpf-benchmark](https://github.com/eunomia-bpf/bpf-benchmark)

---

## [spacedriveapp/spacedrive](https://github.com/spacedriveapp/spacedrive)

Spacedrive is an open source cross-platform file explorer, powered by a virtual distributed filesystem written in Rust.

🔗 [https://github.com/spacedriveapp/spacedrive](https://github.com/spacedriveapp/spacedrive)

---

## [CJVolz/The-Quantum-Universe](https://github.com/CJVolz/The-Quantum-Universe)

Another list of resources on Quantum Space, inspired by Desiree Vogt-Lee's "Awesome Quantum Computing"

🔗 [https://github.com/CJVolz/The-Quantum-Universe](https://github.com/CJVolz/The-Quantum-Universe)

---

## [space-operator/flow-backend](https://github.com/space-operator/flow-backend)

Space Operator Backend

🔗 [https://github.com/space-operator/flow-backend](https://github.com/space-operator/flow-backend)

---

## [eunomia-bpf/llvmbpf](https://github.com/eunomia-bpf/llvmbpf)

Userspace/GPU eBPF VM with llvm JIT/AOT compiler

🔗 [https://github.com/eunomia-bpf/llvmbpf](https://github.com/eunomia-bpf/llvmbpf)

---

## [spacejam/rio](https://github.com/spacejam/rio)

pure rust io_uring library, built on libc, thread & async friendly, misuse resistant

🔗 [https://github.com/spacejam/rio](https://github.com/spacejam/rio)

---

## [Xilinx/mali-userspace-binaries](https://github.com/Xilinx/mali-userspace-binaries)



🔗 [https://github.com/Xilinx/mali-userspace-binaries](https://github.com/Xilinx/mali-userspace-binaries)

---

## [clockworklabs/SpacetimeDB](https://github.com/clockworklabs/SpacetimeDB)

Multiplayer at the speed of light

🔗 [https://github.com/clockworklabs/SpacetimeDB](https://github.com/clockworklabs/SpacetimeDB)

---

## [NethermindEth/formalverification.xyz](https://github.com/NethermindEth/formalverification.xyz)

A website listing all the best FV companies in the Crypto space.

🔗 [https://github.com/NethermindEth/formalverification.xyz](https://github.com/NethermindEth/formalverification.xyz)

---

## [Deep-Fold/PixelSpace](https://github.com/Deep-Fold/PixelSpace)



🔗 [https://github.com/Deep-Fold/PixelSpace](https://github.com/Deep-Fold/PixelSpace)

---

## [psankar/simplefs](https://github.com/psankar/simplefs)

A simple, kernel-space, on-disk filesystem from the scratch

🔗 [https://github.com/psankar/simplefs](https://github.com/psankar/simplefs)

---

## [nickytonline/minty-metaplex](https://github.com/nickytonline/minty-metaplex)

A fun Buildspace project to mint NFTs on Solana using Metaplex.

🔗 [https://github.com/nickytonline/minty-metaplex](https://github.com/nickytonline/minty-metaplex)

---

## [fcambus/spleen](https://github.com/fcambus/spleen)

Monospaced bitmap fonts

🔗 [https://github.com/fcambus/spleen](https://github.com/fcambus/spleen)

---

## [s-macke/VoxelSpace](https://github.com/s-macke/VoxelSpace)

Terrain rendering algorithm in less than 20 lines of code

🔗 [https://github.com/s-macke/VoxelSpace](https://github.com/s-macke/VoxelSpace)

---

## [brocode/fw](https://github.com/brocode/fw)

workspace productivity booster

🔗 [https://github.com/brocode/fw](https://github.com/brocode/fw)

---

## [spaceandtimefdn/blitzar](https://github.com/spaceandtimefdn/blitzar)

Zero-knowledge proof acceleration with GPUs for C++ and Rust

🔗 [https://github.com/spaceandtimefdn/blitzar](https://github.com/spaceandtimefdn/blitzar)

---

## [tiawl/spaceporn](https://github.com/tiawl/spaceporn)

Wiki and Generator for space contemplators

🔗 [https://github.com/tiawl/spaceporn](https://github.com/tiawl/spaceporn)

---

## [bearlike/Pixel-Portfolio-Webite](https://github.com/bearlike/Pixel-Portfolio-Webite)

A Nintendo inspired lightweight, No BS responsive single-page portfolio website built with HTML and CSS :space_invader:

🔗 [https://github.com/bearlike/Pixel-Portfolio-Webite](https://github.com/bearlike/Pixel-Portfolio-Webite)

---

## [endless-sky/endless-sky](https://github.com/endless-sky/endless-sky)

Space exploration, trading, and combat game.

🔗 [https://github.com/endless-sky/endless-sky](https://github.com/endless-sky/endless-sky)

---

## [real-space/AngstromCube](https://github.com/real-space/AngstromCube)

A parallel and GPU-accelerated Code for Real-Space All-Electron Linear-Scaling Density Functional Theory

🔗 [https://github.com/real-space/AngstromCube](https://github.com/real-space/AngstromCube)

---

## [tsherif/space-shooter.c](https://github.com/tsherif/space-shooter.c)

A cross-platform, top-down 2D space shooter written in C using only platform libraries.

🔗 [https://github.com/tsherif/space-shooter.c](https://github.com/tsherif/space-shooter.c)

---

## [ionescu007/tpmtool](https://github.com/ionescu007/tpmtool)

The TpmTool utility is a simple cross-platform tool for accessing TPM2.0 Non-Volatile (NV) Spaces (Index Values) on compliant systems, with zero dependencies on any TPM2.0 stack. It provides the ability to enumerate, create, delete, query, and lock NV indices, as well as to read and write data stored in them.

🔗 [https://github.com/ionescu007/tpmtool](https://github.com/ionescu007/tpmtool)

---

## [spacewalkhq/raft-rs](https://github.com/spacewalkhq/raft-rs)

An understandable, fast and scalable Raft Consensus implementation

🔗 [https://github.com/spacewalkhq/raft-rs](https://github.com/spacewalkhq/raft-rs)

---

## [nikitabobko/AeroSpace](https://github.com/nikitabobko/AeroSpace)

AeroSpace is an i3-like tiling window manager for macOS

🔗 [https://github.com/nikitabobko/AeroSpace](https://github.com/nikitabobko/AeroSpace)

---

## [spacejam/sled](https://github.com/spacejam/sled)

the champagne of beta embedded databases

🔗 [https://github.com/spacejam/sled](https://github.com/spacejam/sled)

---


[← Previous: Astro Telescope](astro-telescope.txt) | [🏠 Back to README](../README.md) | [Next: Astronomy Other 2 →](astronomy-other-2.txt)
