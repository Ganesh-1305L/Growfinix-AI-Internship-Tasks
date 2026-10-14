# Experiments and Observations

## 1. Overview

This document records the prompt engineering experiments conducted for the project **Advanced Prompt Engineering for Visuals Using Stable Diffusion**.

The experiments focus on generating two types of visuals using **Stable Diffusion 3.5 Large (8B)**: an ultra-realistic DSLR portrait and a cinematic promotional poster.

**Model:** [Stable Diffusion 3.5 Large (8B)](https://huggingface.co/stabilityai/stable-diffusion-3.5-large)

## 2. Experiment 1: Ultra-Realistic DSLR Portrait

### Objective
To generate a realistic portrait by describing facial features, camera settings, lighting, skin texture, and background details.

### Prompting Techniques
- Detailed subject and appearance description.
- Camera terminology, including an 85mm lens and f/1.8 aperture.
- Soft lighting and natural shadows.
- Shallow depth of field and background bokeh.
- Emphasis on realistic skin and fabric textures.

### Observation
The generated image should be evaluated for facial detail, natural skin texture, eye sharpness, lighting, and background blur. The prompt is designed to produce a professional portrait photography style.

### Output
`images/dslr_portrait.png`

## 3. Experiment 2: Cinematic Promotional Poster

### Objective
To generate a cinematic science-fiction promotional poster with a dramatic environment and professional composition.

### Prompting Techniques
- Detailed description of the astronaut and alien environment.
- Low-angle camera perspective and foreground silhouette.
- Dramatic orange lighting with contrasting teal shadows.
- Atmospheric fog, floating dust, and volumetric light rays.
- Cinematic color grading and detailed textures.
- Clear space for the title and credits.

### Observation
The generated image should be evaluated for composition, environmental detail, lighting contrast, atmospheric depth, and overall cinematic appearance. The prompt is designed to create a visually dramatic science-fiction poster.

### Output
`images/cinematic_poster.png`

## 4. Experiment Summary

| Experiment | Visual Type | Main Focus | Evaluation Criteria |
|---|---|---|---|
| 1 | DSLR Portrait | Photorealism | Skin texture, eyes, lighting, background blur |
| 2 | Cinematic Poster | Cinematic composition | Atmosphere, contrast, details, visual balance |

## 5. Comparison and Analysis

The portrait prompt emphasizes realistic human features, natural skin texture, photographic lighting, and shallow depth of field.

The poster prompt emphasizes environmental storytelling, dramatic lighting, atmospheric effects, and cinematic composition.

Both experiments demonstrate how specific descriptions of subjects, lighting, camera perspective, textures, and composition can guide image generation toward different visual objectives.

## 6. Conclusion

These experiments demonstrate the application of prompt engineering to two distinct visual-generation tasks. Detailed positive prompts help communicate the desired visual style, while negative prompts may help avoid unwanted characteristics when supported by the generation interface.

The quality of the results should be assessed using the actual generated images. The model version and generation settings should be recorded from the interface used for the experiments.

