---
Title: Ressources 
Date: 2025-10-19
Category: pages
Order: 4
---

## Developed projects

There are several open-source projects that I develop and maintain. If you find them useful, please consider giving feedback, reporting issues, or contributing to their development!


| <div style="width: 70px;"></div> | <div style="width: 70px;"></div> |
|:-|:-|
|<img src="https://github.com/leonard-seydoux/covseisnet/raw/main/docs/source/_static/logo_covseisnet_normal.svg" width="120" style="float: left;"/>|[Covseisnet](https://github.com/leonard-seydoux/covseisnet) is a Python package for array signal processing, with a focus on data from seismic networks. The core mathematical object of the package is the network covariance matrix, used for signal detection, source separation, localisation, and plane-wave beamforming. The signal detection and processing methods are based on the analysis of the covariance matrix spectrum. The covariance matrix can be used as input for classical array processing tools such as beamforming and inter-station cross-correlations. |
|<img src="https://github.com/scatseisnet/scatseisnet/blob/main/docs/source/logo/logo_scatseisnet_notext.png?raw=true" alt="Scatseisnet logo" width="120" style="float: left;"/> | [Scatseisnet](https://github.com/scatseisnet/scatseisnet) is a Python package for seismic signal detection and classification using deep learning. It is built on top of Covseisnet and leverages covariance matrix analysis for efficient seismic data processing. The package includes pre-trained models for various seismic signal types, including earthquakes, volcanic tremors, and anthropogenic noise. Scatseisnet is designed to be user-friendly and easily integrable into existing seismic data analysis workflows.|
|<img src="https://raw.githubusercontent.com/leonard-seydoux/pycpt-city/main/logo/logo.gif" alt="Pycpt-city logo" width="120" style="float: left;"/>|[PyCPT-city](https://github.com/leonard-seydoux/pycpt-city) is a Python package for bringing color palette tables (CPT) from the [cpt-city](http://seaviewsensing.com/pub/cpt-city/) to Matplotlib. It allows users to easily apply a wide range of color palettes to their visualizations, enhancing the aesthetic appeal and interpretability of geospatial and scientific data plots. The package supports various CPT formats and provides functions for loading, converting, and applying these color palettes in Matplotlib.|
|<img src="https://raw.githubusercontent.com/leonard-seydoux/pygmrt/main/logo/logo.png" alt="Pygmrt logo" width="120" style="float: left;"/>| [PyGMRT](https://github.com/leonard-seydoux/pygmrt) is a Python package for automating the fetch data from the [Global Multi-Resolution Topography (GMRT) Synthesis](https://www.gmrt.org/) database. The package is designed to facilitate the integration of GMRT data into geospatial analysis workflows, making it easier for researchers and scientists to access and utilize this valuable resource for their studies.|

## Contributed projects

| | |
|:-|:-|
|<img src="https://github.com/ebeauce/beampower/raw/main/data/beampower_logo.png" width="90" style="float: left;"/>|[Beampower](https://github.com/ebeauce/beampower) is a package for beamforming (or backprojection) of seismic signal for event detection and location. The Python wrapper can call the C (CPU) or CUDA-C (GPU) implementation.|