# Growfinix-AI-Internship-Tasks
# Advanced Prompt Engineering for Visuals

## 1. Project Overview

This project explores advanced prompt engineering using Stable Diffusion to generate two types of visual assets: an ultra-realistic DSLR portrait and a cinematic promotional poster.

The objective is to understand how descriptive language, camera specifications, lighting, textures, composition, colour grading, and negative prompts influence AI-generated images.

## 2. Objectives

- Generate realistic portrait photography using detailed text prompts.
- Create a cinematic promotional poster with dramatic visual effects.
- Experiment with camera angles, lighting, textures, and composition.
- Evaluate the impact of prompt modifications on image quality.
- Document the prompts, generation settings, and results.

## 3. Technology Stack

- **Image generation:** Stable Diffusion
- **Prompt engineering:** Natural-language prompts and negative prompts
- **Documentation:** Markdown
- **Version control and submission:** GitHub
- **Optional text editing:** Canva

## 4. Task 1: Ultra-Realistic DSLR Portrait

### Objective
Generate a realistic portrait with natural skin texture, detailed eyes, professional lighting, and a shallow depth of field.

### Prompt
See [Portrait Prompt](prompts/portrait_prompt.md).

### Parameters
- Model: Record the actual model used
- Image dimensions: Record the actual dimensions
- Sampling steps: Record the actual value
- CFG scale: Record the actual value
- Seed: Record the actual value

### Generated Result

![AI-generated DSLR portrait](images/dslr_portrait.png)

### Observations
Describe the realism of the skin texture, sharpness of the eyes, background blur, lighting, and overall composition. Mention any visual imperfections.

## 5. Task 2: Cinematic Promotional Poster

### Objective
Create a cinematic science-fiction promotional poster using dramatic lighting, atmospheric depth, realistic textures, and complementary colours.

### Prompt
See [Poster Prompt](prompts/poster_prompt.md).

### Parameters
- Model: Record the actual model used
- Image dimensions: Record the actual dimensions
- Sampling steps: Record the actual value
- CFG scale: Record the actual value
- Seed: Record the actual value

### Generated Result

![AI-generated cinematic poster](images/cinematic_poster.png)

### Observations
Discuss the perspective, colour grading, lighting, atmosphere, subject placement, and overall cinematic effect.

## 6. Prompt Engineering Experiments

Compare different prompt versions while keeping other settings constant wherever possible.

| Experiment | Modification | Observation |
|---|---|---|
| 1 | Basic description | Record the result |
| 2 | Camera and lens details | Record the result |
| 3 | Lighting and texture details | Record the result |
| 4 | Negative prompt | Record the result |

Replace the example observations with findings from your actual generated images.

## 7. Conclusion

This project demonstrates how advanced prompt engineering can guide AI image generation toward specific visual outcomes. Detailed descriptions of camera settings, lighting, textures, composition, and colour grading provide greater control over the intended aesthetic. Iterative experimentation helps identify effective prompt elements and improve the final visual assets.

## 8. References

- Stable Diffusion WebUI: https://github.com/AUTOMATIC1111/stable-diffusion-webui
- Stable Diffusion documentation and model resources: https://huggingface.co/docs/diffusers
- Generated assets and prompt experiments are documented in this repository.

## 9. Reproducibility

The prompts and generation parameters are provided to support reproducibility. Results may vary depending on the model version, interface, and generation settings.
