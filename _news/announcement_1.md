---
layout: post
date:  2024-11-28 12:00:00-0400
inline: true
related_posts: false
---

My [**MSc Thesis**](https://github.com/sifmanos/Lyra-MSS-AMT) involved the development of a two-stage system for transcribing Cretan dance tunes played on the Cretan lyra using Deep Learning techniques.
In the first stage, **Music Source Separation (MSS)** models isolated the lyra from accompanying instruments, with the MSK model (BiLSTM architecture) achieving the best results. In the second stage, **Automatic Music Transcription (AMT)** models extracted pitch and segmented notes, with the CN model (based on pretrained CREPE) excelling in handling rapid note transitions.
The system **outperformed** both the SOUSTA Corpus benchmark and the Logic Pro X tool, highlighting the potential of DL in addressing the challenges of transcribing traditional music and **preserving cultural heritage**.

I have created a [**Demo Page**](https://sifmanos.github.io/Lyra-MSS-AMT/) to showcase the system's results, allowing users to explore outputs interactively. I also plan to develop an app that lets users input Cretan tunes and perform inference, generating a separated lyra track, transcription, or both, for practical and accessible use.