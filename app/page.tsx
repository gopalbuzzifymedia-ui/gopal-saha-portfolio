'use client';

import { useMemo, useState } from 'react';
import { ArrowUpRight, Mail, Phone ,Minus, Plus, X, RotateCcw, ZoomIn } from 'lucide-react';

type Category = 'All' | 'Animal Anatomy' | 'Scientific Infographics' | 'Comparison & Scale' | 'Coloring Pages' | 'Educational Posters & Collage' | 'Medical & Human Anatomy';

type Project = {
  title: string;
  category: Exclude<Category, 'All'>;
  image: string;
  description: string;
  components: string[];
  process: string;
  year?: string;
};

const projects: Project[] = [
  // PHASE 1 — ANIMAL ANATOMY (15)
  { title: 'Turtle Anatomy 1st Part', category: 'Animal Anatomy', image: '/portfolio/Turtle-Anatomy-1.jpg', description: 'Detailed educational animal anatomy illustration presenting the major external and internal structures of a bear.', components: ['Main animal illustration', 'Anatomical structures', 'Callout labels', 'Educational layout'], process: 'Research → anatomical planning → vector illustration → labeling → final layout' },
  { title: 'Turtle Anatomy', category: 'Animal Anatomy', image: '/portfolio/Turtle-Anatomy.jpg', description: 'Detailed educational animal anatomy illustration presenting the major external and internal structures of a bear.', components: ['Main animal illustration', 'Anatomical structures', 'Callout labels', 'Educational layout'], process: 'Research → anatomical planning → vector illustration → labeling → final layout' },
{ title: 'Bear Anatomy', category: 'Animal Anatomy', image: '/portfolio/Bear-Anatomy.jpg', description: 'Detailed educational animal anatomy illustration presenting the major external and internal structures of a bear.', components: ['Main animal illustration', 'Anatomical structures', 'Callout labels', 'Educational layout'], process: 'Research → anatomical planning → vector illustration → labeling → final layout' },
  { title: 'Frog Anatomy', category: 'Animal Anatomy', image: '/portfolio/Frog-Anatomy.jpg', description: 'Educational anatomy artwork explaining the major structures of a frog through a clear illustrated diagram.', components: ['Main subject', 'Internal anatomy', 'Labels', 'Supporting diagram elements'], process: 'Reference research → structure mapping → illustration → annotation' },
  { title: 'Hamster Anatomy', category: 'Animal Anatomy', image: '/portfolio/Hamster-Anatomy.jpg', description: 'Educational anatomy artwork explaining the major structures of a frog through a clear illustrated diagram.', components: ['Main subject', 'Internal anatomy', 'Labels', 'Supporting diagram elements'], process: 'Reference research → structure mapping → illustration → annotation' },
  { title: 'Leech Anatomy', category: 'Animal Anatomy', image: '/portfolio/Leech-Anatomy-907x1024.jpg', description: 'Research-based anatomy illustration showing the structure of a leech in an educational visual format.', components: ['External anatomy', 'Internal anatomy', 'Body structure', 'Labels'], process: 'Research → anatomy breakdown → vector illustration → final educational composition' },
  { title: 'Lobster Anatomy', category: 'Animal Anatomy', image: '/portfolio/Lobster-Anatomy.jpg', description: 'Detailed lobster anatomy illustration designed for clear scientific communication.', components: ['Body segments', 'External structures', 'Internal structures', 'Labels'], process: 'Research → structural planning → illustration → annotation' },
  { title: 'Penguin Anatomy', category: 'Animal Anatomy', image: '/portfolio/Penguin-Anatomy.jpg', description: 'Educational anatomy illustration showing key structures of a penguin.', components: ['Main subject', 'Anatomical features', 'Labels', 'Educational composition'], process: 'Reference study → anatomy mapping → illustration → final layout' },
  { title: 'Skunk Anatomy', category: 'Animal Anatomy', image: '/portfolio/Skunk-Anatomy.jpg', description: 'Clean, research-led animal anatomy illustration created for educational use.', components: ['Main illustration', 'Anatomical structures', 'Labels', 'Visual hierarchy'], process: 'Research → structure planning → vector artwork → final presentation' },
  { title: 'Spider Anatomy', category: 'Animal Anatomy', image: '/portfolio/Spider-Anatomy.jpg', description: 'Scientific illustration presenting the major anatomical structures of a spider.', components: ['Body regions', 'Anatomical details', 'Labels', 'Diagram structure'], process: 'Research → anatomical mapping → illustration → labeling' },
  { title: 'Choanocyte Structure Part 1', category: 'Scientific Infographics', image: '/portfolio/Choanocyte-Structure-(Anatomy)-1.jpg', description: 'Detailed scientific anatomy diagram explaining the structure of a choanocyte.', components: ['Cell structure', 'Internal details', 'Callouts', 'Scientific diagram'], process: 'Reference study → structure mapping → vector illustration → annotation' },
  { title: 'Choanocyte Structure', category: 'Scientific Infographics', image: '/portfolio/Choanocyte-Structure-(Anatomy).jpg', description: 'Detailed scientific anatomy diagram explaining the structure of a choanocyte.', components: ['Cell structure', 'Internal details', 'Callouts', 'Scientific diagram'], process: 'Reference study → structure mapping → vector illustration → annotation' },
  { title: 'Bat Anatomy', category: 'Animal Anatomy', image: '/portfolio/Bat-Anatomy.jpg', description: 'Detailed anatomy illustration showing the internal structure of a nematode.', components: ['Internal anatomy', 'Body structure', 'Labels', 'Educational diagram'], process: 'Research → anatomical mapping → illustration → final layout' },
  { title: 'Hedgehog Anatomy', category: 'Animal Anatomy', image: '/portfolio/Hedgehog-Anatomy.jpg', description: 'Research-based anatomical illustration created for clear educational communication.', components: ['Body anatomy', 'Structural details', 'Labels', 'Comparison view'], process: 'Research → anatomy breakdown → illustration → final composition' },
{ title: 'Butterfly Anatomy', category: 'Animal Anatomy', image: '/portfolio/Butterfly-Anatomy.jpg', description: 'Research-based anatomical illustration created for clear educational communication.', components: ['Body anatomy', 'Structural details', 'Labels', 'Comparison view'], process: 'Research → anatomy breakdown → illustration → final composition' },
{ title: 'Earthworm Anatomy', category: 'Animal Anatomy', image: '/portfolio/Earthworm-Anatomy.jpg', description: 'Research-based anatomical illustration created for clear educational communication.', components: ['Body anatomy', 'Structural details', 'Labels', 'Comparison view'], process: 'Research → anatomy breakdown → illustration → final composition' },
{ title: 'Echinoderms Water Vascular System', category: 'Animal Anatomy', image: '/portfolio/Echinoderms-Water-Vascular-System.jpg', description: 'Research-based anatomical illustration created for clear educational communication.', components: ['Body anatomy', 'Structural details', 'Labels', 'Comparison view'], process: 'Research → anatomy breakdown → illustration → final composition' },


  // PHASE 2 — SCIENTIFIC INFOGRAPHICS (15)
  { title: 'Aphid Life Cycle', category: 'Scientific Infographics', image: '/portfolio/Aphid-Life-Cycle.jpg', description: 'A visual sequence explaining the major stages of an aphid life cycle.', components: ['Life stages', 'Sequence flow', 'Illustrations', 'Labels'], process: 'Research → life-cycle mapping → illustration → information layout' },
  { title: 'Butterfly Life Cycle Part 1', category: 'Scientific Infographics', image: '/portfolio/Butterfly-Life-Cycle-1.jpg', description: 'Educational infographic presenting the transformation stages of a butterfly.', components: ['Life stages', 'Transformation sequence', 'Illustration', 'Labels'], process: 'Research → stage planning → illustration → final infographic' },
  { title: 'Butterfly Life Cycle', category: 'Scientific Infographics', image: '/portfolio/Butterfly-Life-Cycle.jpg', description: 'Educational infographic presenting the transformation stages of a butterfly.', components: ['Life stages', 'Transformation sequence', 'Illustration', 'Labels'], process: 'Research → stage planning → illustration → final infographic' },
  { title: 'Firefly Glow (Bioluminescence)', category: 'Scientific Infographics', image: '/portfolio/Firefly-Glow-(Bioluminescence).jpg', description: 'Scientific visual explaining the biological mechanism behind firefly bioluminescence.', components: ['Biological mechanism', 'Process flow', 'Supporting illustration', 'Labels'], process: 'Research → mechanism breakdown → visual explanation → final artwork' },
  { title: 'Flamingo Anatomy & Adaptations', category: 'Scientific Infographics', image: '/portfolio/Flamingo-Anatomy-and-Adaptations.jpg', description: 'Information-rich visual combining flamingo anatomy with functional adaptations.', components: ['Anatomy', 'Adaptations', 'Callouts', 'Information hierarchy'], process: 'Research → content structure → illustration → final composition' },
  { title: 'Flamingo Filter-Feeding Technique', category: 'Scientific Infographics', image: '/portfolio/Flamingo-Filter-Feeding-Technique.jpg', description: 'A process-focused visual explaining how flamingos filter-feed.', components: ['Process sequence', 'Anatomy', 'Directional flow', 'Labels'], process: 'Research → process mapping → illustration → explanatory layout' },
  { title: 'Fungivores & Fungivory Examples', category: 'Scientific Infographics', image: '/portfolio/Fungivores-and-Fungivory-Examples.jpg', description: 'Educational infographic showing examples of animals that consume fungi.', components: ['Animal examples', 'Food source', 'Categories', 'Visual comparison'], process: 'Research → categorization → visual system → final infographic' },
  { title: 'How Do Jellyfish Sting?', category: 'Scientific Infographics', image: '/portfolio/How-Do-Jellyfish-Sting.jpg', description: 'Scientific process illustration explaining the mechanism behind a jellyfish sting.', components: ['Biological mechanism', 'Sequence', 'Supporting diagrams', 'Labels'], process: 'Research → mechanism breakdown → visual storytelling → final layout' },
  { title: 'Octopus Defense', category: 'Scientific Infographics', image: '/portfolio/Octopus-Defense.jpg', description: 'Visual guide presenting different defense strategies used by octopuses.', components: ['Behaviors', 'Defense mechanisms', 'Illustration', 'Information hierarchy'], process: 'Research → content grouping → illustration → final composition' },
  { title: 'Sponge Life Cycle', category: 'Scientific Infographics', image: '/portfolio/Sponge-Life-Cycle.jpg', description: 'Clear visual sequence showing the stages of a sponge life cycle.', components: ['Life stages', 'Sequence', 'Illustrations', 'Labels'], process: 'Research → sequence planning → illustration → educational layout' },
  { title: 'Anglerfish Types', category: 'Educational Posters & Collage', image: '/portfolio/Anglerfish-Lophiiformes-Types.jpg', description: 'Taxonomy-focused educational infographic presenting different anglerfish types.', components: ['Species grouping', 'Taxonomy', 'Illustrations', 'Labels'], process: 'Research → species grouping → illustration → information design' },
  { title: 'Coniferous Forest Location Map', category: 'Scientific Infographics', image: '/portfolio/Coniferous-Forest-Location-Map.jpg', description: 'Educational map showing the geographic distribution of coniferous forests.', components: ['Map', 'Geographic distribution', 'Legend', 'Labels'], process: 'Research → map planning → visual hierarchy → final artwork' },
  { title: 'Owl Distribution and Habitat', category: 'Scientific Infographics', image: '/portfolio/Owl-Distribution-and-Habitat.jpg', description: 'Educational map showing the geographic distribution of coniferous forests.', components: ['Map', 'Geographic distribution', 'Legend', 'Labels'], process: 'Research → map planning → visual hierarchy → final artwork' },
  { title: 'Hamster Life', category: 'Scientific Infographics', image: '/portfolio/Hamster-Life.jpg', description: 'Educational map showing the geographic distribution of coniferous forests.', components: ['Map', 'Geographic distribution', 'Legend', 'Labels'], process: 'Research → map planning → visual hierarchy → final artwork' },
  { title: 'Vegetables: High & Low Vitamin K', category: 'Educational Posters & Collage', image: '/portfolio/Vegetables-With-High-Low-Vitamin-K.jpg', description: 'Structured information design comparing vegetables by vitamin K content.', components: ['Food illustrations', 'Data grouping', 'Categories', 'Labels'], process: 'Research → data organization → visual system → final infographic' },
  { title: 'Sponge Types', category: 'Educational Posters & Collage', image: '/portfolio/Sponge-Porifera-Sea-Sponge-Types.jpg', description: 'Educational visual comparing different sponge forms and types.', components: ['Types', 'Species grouping', 'Illustrations', 'Classification'], process: 'Research → classification → illustration → final information layout' },

  // PHASE 3 — SIZE COMPARISON (9)
  { title: 'Wombat Size Comparison', category: 'Comparison & Scale', image: '/portfolio/Wombat-Size.jpg', description: 'Visual comparison designed to communicate the size range of wombats.', components: ['Subjects', 'Scale system', 'Measurements', 'Reference elements'], process: 'Research → measurement verification → scale planning → final layout' },
  { title: 'Hamster Size Comparison', category: 'Comparison & Scale', image: '/portfolio/Hamster-Size-Comparison.jpg', description: 'Comparison visual showing representative hamster species by body size.', components: ['Species', 'Body length', 'Scale', 'Visual comparison'], process: 'Research → data comparison → scale composition → final artwork' },
  { title: 'Mosquito Size Comparison', category: 'Comparison & Scale', image: '/portfolio/Mosquito-Size-Comparison.jpg', description: 'Scale-focused visual comparing mosquito size using clear reference measurements.', components: ['Subjects', 'Measurement', 'Scale line', 'Comparison'], process: 'Research → measurement planning → visual scale → final layout' },
  { title: 'Owl Size Comparison', category: 'Comparison & Scale', image: '/portfolio/Owl-Size-Comparison.jpg', description: 'Visual comparison presenting selected owl species across a size range.', components: ['Species', 'Height', 'Scale', 'Comparison'], process: 'Research → size verification → composition → final infographic' },
  { title: 'Skunk Size Comparison', category: 'Comparison & Scale', image: '/portfolio/Skunk-Size-Comparison.jpg', description: 'Scale comparison showing representative skunk species from smaller to larger forms.', components: ['Species', 'Body length', 'Shoulder height', 'Scale reference'], process: 'Research → measurement verification → scale planning → final artwork' },
  { title: 'Otter vs Beaver vs Muskrat vs Mink', category: 'Comparison & Scale', image: '/portfolio/Otter-vs-Beaver-vs-Muskrat-vs-Mink.jpg', description: 'Comparative visual showing relative size differences among four semiaquatic mammals.', components: ['Multiple subjects', 'Scale', 'Species labels', 'Comparison system'], process: 'Research → measurement comparison → alignment → final visual system' },
{ title: 'Hummingbird Size Comparison', category: 'Comparison & Scale', image: '/portfolio/Hummingbird-Size-Comparison.jpg', description: 'Comparative visual showing relative size differences among four semiaquatic mammals.', components: ['Multiple subjects', 'Scale', 'Species labels', 'Comparison system'], process: 'Research → measurement comparison → alignment → final visual system' },
{ title: 'Aphid Size Comparison', category: 'Comparison & Scale', image: '/portfolio/Aphid-Size-Comparison.jpg', description: 'Comparative visual showing relative size differences among four semiaquatic mammals.', components: ['Multiple subjects', 'Scale', 'Species labels', 'Comparison system'], process: 'Research → measurement comparison → alignment → final visual system' },
{ title: 'Deer Size Comparison', category: 'Comparison & Scale', image: '/portfolio/Dee-Size-Comparison.jpg', description: 'Comparative visual showing relative size differences among four semiaquatic mammals.', components: ['Multiple subjects', 'Scale', 'Species labels', 'Comparison system'], process: 'Research → measurement comparison → alignment → final visual system' },
  { title: 'Penguin Types', category: 'Educational Posters & Collage', image: '/portfolio/Penguin-Types.jpg', description: 'Structured comparison of penguin types and their physical differences.', components: ['Species', 'Height', 'Visual comparison', 'Classification'], process: 'Research → species grouping → scale arrangement → final design' },
  { title: 'Coniferous Trees', category: 'Educational Posters & Collage', image: '/portfolio/Coniferous-Trees.jpg', description: 'Visual comparison presenting a range of coniferous tree forms and sizes.', components: ['Tree species', 'Height', 'Silhouettes', 'Comparison'], process: 'Research → species selection → scale planning → final illustration' },
  { title: 'Types of Lettuce', category: 'Educational Posters & Collage', image: '/portfolio/Types-of-Lettuce.jpg', description: 'Clean visual comparison of different lettuce varieties.', components: ['Varieties', 'Visual comparison', 'Labels', 'Classification'], process: 'Research → categorization → illustration → final composition' },
  { title: 'Red Wine Types', category: 'Educational Posters & Collage', image: '/portfolio/Red-Wine-Types.jpg', description: 'Structured visual classification presenting different red wine types.', components: ['Types', 'Classification', 'Visual grouping', 'Labels'], process: 'Research → category structure → visual design → final presentation' },

  // PHASE 4 — COLORING PAGES (15)
  { title: 'Brinjal Coloring Page', category: 'Coloring Pages', image: '/portfolio/Brinjal-Coloring-Page.jpg', description: 'Clean printable line-art coloring page centered on a brinjal illustration.', components: ['Main line art', 'Printable composition', 'Detail structure', 'Page layout'], process: 'Concept → line-art construction → refinement → printable final artwork' },
  { title: 'Burger Coloring Page', category: 'Coloring Pages', image: '/portfolio/Burger-Coloring-Page.jpg', description: 'Playful printable coloring page illustration with clear, bold line work.', components: ['Main subject', 'Line art', 'Details', 'Printable layout'], process: 'Concept → illustration → line refinement → final page' },
  { title: 'Donut Coloring Page', category: 'Coloring Pages', image: '/portfolio/Donut-Coloring-Page.jpg', description: 'Clean coloring-page artwork designed for simple visual engagement.', components: ['Main object', 'Line art', 'Decorative details', 'Page composition'], process: 'Concept → line-art development → detail refinement → final artwork' },
  { title: 'DuckTales Coloring Page', category: 'Coloring Pages', image: '/portfolio/DuckTales-Coloring-Page.jpg', description: 'Character-focused printable coloring page artwork.', components: ['Character line art', 'Pose', 'Details', 'Printable format'], process: 'Reference → line-art construction → refinement → final page' },
  { title: 'Fish Coloring Page', category: 'Coloring Pages', image: '/portfolio/Fish-Coloring-Page.jpg', description: 'Printable fish-themed coloring artwork with clean illustrative line work.', components: ['Subject', 'Line art', 'Pattern details', 'Page composition'], process: 'Concept → illustration → clean line work → final artwork' },
  { title: 'Fishing Coloring Page', category: 'Coloring Pages', image: '/portfolio/Fishing-Coloring-Page.jpg', description: 'Scene-based coloring page designed around a fishing theme.', components: ['Scene', 'Characters/objects', 'Line art', 'Composition'], process: 'Concept → scene construction → line-art refinement → final page' },
  { title: 'Deadpool Coloring Page', category: 'Coloring Pages', image: '/portfolio/Hard-Realistic-Deadpool-Coloring-Page.jpg', description: 'Detailed character coloring page built around strong line-art definition.', components: ['Character', 'Costume details', 'Line art', 'Printable layout'], process: 'Reference → construction → detail refinement → final printable artwork' },
  { title: 'King Ghidorah Coloring Page', category: 'Coloring Pages', image: '/portfolio/King-Ghidorah-coloring-page.jpg', description: 'Detailed creature coloring page with complex character line work.', components: ['Creature form', 'Details', 'Line art', 'Printable composition'], process: 'Reference → construction → line refinement → final artwork' },
  { title: 'Mechagodzilla Coloring Page', category: 'Coloring Pages', image: '/portfolio/Mechagodzilla-Coloring-Page.jpg', description: 'Detailed mechanical character coloring page designed for printable use.', components: ['Mechanical form', 'Structural details', 'Line art', 'Page layout'], process: 'Reference → construction → detail refinement → final page' },
  { title: 'Water Hazard Coloring Page', category: 'Coloring Pages', image: '/portfolio/WaterHazard-(Ben-10)-Coloring-Page.jpg', description: 'Character-based printable coloring page with clear line-art structure.', components: ['Character', 'Pose', 'Line art', 'Printable composition'], process: 'Reference → line-art construction → refinement → final artwork' },
  { title: 'Wildvine Coloring Page', category: 'Coloring Pages', image: '/portfolio/Wildvine-(Ben-10)-Coloring-Page.jpg', description: 'Character coloring page focused on expressive form and clean printable line work.', components: ['Character form', 'Line art', 'Details', 'Page layout'], process: 'Reference → construction → refinement → final artwork' },
  { title: 'Coloring Collection Mockup', category: 'Coloring Pages', image: '/portfolio/Mockup 1.jpg', description: 'Presentation mockup showing a coloring-page collection as a finished product.', components: ['Collection presentation', 'Page previews', 'Product mockup', 'Visual hierarchy'], process: 'Artwork selection → presentation composition → mockup → final presentation' },
  { title: 'Subscribed Ebook Cover Page', category: 'Coloring Pages', image: '/portfolio/subscribed-ebook-cover-page.jpg', description: 'Presentation mockup showing a coloring-page collection as a finished product.', components: ['Collection presentation', 'Page previews', 'Product mockup', 'Visual hierarchy'], process: 'Artwork selection → presentation composition → mockup → final presentation' },
  { title: 'Flower Coloring Page', category: 'Coloring Pages', image: '/portfolio/Flower-Coloring-Page.jpg', description: 'Presentation mockup showing a coloring-page collection as a finished product.', components: ['Collection presentation', 'Page previews', 'Product mockup', 'Visual hierarchy'], process: 'Artwork selection → presentation composition → mockup → final presentation' },
  { title: 'Rainbow Coloring Page', category: 'Coloring Pages', image: '/portfolio/Rainbow-Coloring-Page.jpg', description: 'Presentation mockup showing a coloring-page collection as a finished product.', components: ['Collection presentation', 'Page previews', 'Product mockup', 'Visual hierarchy'], process: 'Artwork selection → presentation composition → mockup → final presentation' },


  // PHASE 5 — EDUCATIONAL POSTERS & COLLAGE (18)
  { title: 'Atlantic Knot Instructions', category: 'Educational Posters & Collage', image: '/portfolio/Atlantic-Knot-Instructions.jpg', description: 'Step-by-step instructional visual explaining the Atlantic knot.', components: ['Steps', 'Sequence', 'Instructional graphics', 'Labels'], process: 'Process breakdown → step planning → illustration → instructional layout' },
  { title: 'Climbing Knots', category: 'Educational Posters & Collage', image: '/portfolio/Climbing-Knots.jpg', description: 'Educational visual presenting climbing knot instructions in a clear sequence.', components: ['Knot diagrams', 'Steps', 'Sequence', 'Labels'], process: 'Process mapping → diagram construction → instructional composition' },
  { title: 'Coniferous Forest Location Map', category: 'Educational Posters & Collage', image: '/portfolio/Coniferous-Forest-Location-Map.jpg', description: 'Educational map-based poster explaining coniferous forest distribution.', components: ['Map', 'Geographic information', 'Legend', 'Labels'], process: 'Research → map planning → information hierarchy → final poster' },
  { title: 'Coniferous Trees', category: 'Educational Posters & Collage', image: '/portfolio/Coniferous-Trees.jpg', description: 'Educational poster presenting a range of coniferous tree species.', components: ['Species', 'Illustrations', 'Labels', 'Classification'], process: 'Research → species selection → illustration → poster composition' },
  { title: 'Flamingo Types', category: 'Educational Posters & Collage', image: '/portfolio/Flamingo-Types-Species.jpg', description: 'Structured educational visual comparing different flamingo species.', components: ['Species', 'Comparison', 'Illustrations', 'Labels'], process: 'Research → species grouping → visual comparison → final poster' },
  { title: 'Flower Vegetables', category: 'Educational Posters & Collage', image: '/portfolio/Flower-Vegetables.jpg', description: 'Visual educational guide showing different flower vegetables.', components: ['Food varieties', 'Illustration', 'Classification', 'Labels'], process: 'Research → category planning → illustration → educational layout' },
  { title: 'How to Tie a Cleat Hitch', category: 'Educational Posters & Collage', image: '/portfolio/How-to-Tie-a-Cleat-Hitch.jpg', description: 'Step-by-step instructional visual explaining how to tie a cleat hitch.', components: ['Steps', 'Sequence', 'Hand movement', 'Instructions'], process: 'Process breakdown → step planning → illustration → instructional layout' },
  { title: 'Penguin Types', category: 'Educational Posters & Collage', image: '/portfolio/Penguin-Types.jpg', description: 'Educational poster presenting different penguin types in a clear visual system.', components: ['Species', 'Illustration', 'Classification', 'Labels'], process: 'Research → species grouping → illustration → poster composition' },
  { title: 'Red Wine Types', category: 'Educational Posters & Collage', image: '/portfolio/Red-Wine-Types.jpg', description: 'Educational classification visual showing different red wine types.', components: ['Classification', 'Types', 'Visual grouping', 'Labels'], process: 'Research → category structure → visual design → final poster' },
  { title: 'Sponge Types', category: 'Educational Posters & Collage', image: '/portfolio/Sponge-Porifera-Sea-Sponge-Types.jpg', description: 'Educational visual comparing different sponge forms and types.', components: ['Types', 'Species', 'Visual comparison', 'Classification'], process: 'Research → classification → illustration → final information layout' },
  { title: 'Types of Lettuce', category: 'Educational Posters & Collage', image: '/portfolio/Types-of-Lettuce.jpg', description: 'Clear educational poster presenting different lettuce varieties.', components: ['Varieties', 'Illustration', 'Labels', 'Classification'], process: 'Research → selection → illustration → poster layout' },


  // PHASE 6 — MEDICAL & HUMAN ANATOMY (15)
  { title: 'Diaphragm Drawing', category: 'Medical & Human Anatomy', image: '/portfolio/DIaphragm-Location-drawing.png', description: 'Anatomical visual explaining the position and relationship of the diaphragm.', components: ['Anatomical position', 'Body landmarks', 'Labels', 'Medical diagram'], process: 'Reference study → anatomical mapping → illustration → annotation' },
  { title: 'Diaphragm Location', category: 'Medical & Human Anatomy', image: '/portfolio/DIaphragm-Location.jpg', description: 'Anatomical visual explaining the position and relationship of the diaphragm.', components: ['Anatomical position', 'Body landmarks', 'Labels', 'Medical diagram'], process: 'Reference study → anatomical mapping → illustration → annotation' },
  { title: 'Deep or Intrinsic Back Muscles', category: 'Medical & Human Anatomy', image: '/portfolio/Deep-or-Intrinsic-Back-Muscles.jpg', description: 'Detailed anatomical illustration showing the deep musculature of the back.', components: ['Muscle groups', 'Anatomical layers', 'Labels', 'Structure'], process: 'Anatomy research → layer planning → illustration → final diagram' },
  { title: 'Diaphragm', category: 'Medical & Human Anatomy', image: '/portfolio/Diaphragm.jpg', description: 'Focused anatomical illustration explaining the structure of the diaphragm.', components: ['Muscle anatomy', 'Structure', 'Labels', 'Medical illustration'], process: 'Research → anatomical breakdown → vector illustration → annotation' },
  { title: 'Flexor Carpi Ulnaris Muscle', category: 'Medical & Human Anatomy', image: '/portfolio/Flexor-Carpi-Ulnaris-Muscle-Location.jpg', description: 'Focused anatomical diagram showing the location of the flexor carpi ulnaris.', components: ['Muscle location', 'Arm anatomy', 'Labels', 'Reference'], process: 'Anatomical research → location mapping → illustration → final layout' },
  { title: 'Humerus Anatomy', category: 'Medical & Human Anatomy', image: '/portfolio/Humerus.jpg', description: 'Clear anatomical reference illustration of the humerus.', components: ['Bone anatomy', 'Landmarks', 'Labels', 'Medical reference'], process: 'Reference study → structure mapping → illustration → annotation' },
  { title: 'Intermediate Back Muscles', category: 'Medical & Human Anatomy', image: '/portfolio/Intermediate-Back-Muscles.jpg', description: 'Anatomical diagram explaining the intermediate muscle layer of the back.', components: ['Muscle layers', 'Anatomy', 'Labels', 'Structural breakdown'], process: 'Research → anatomical layering → illustration → final diagram' },
  { title: 'Longus Capitis Drawing', category: 'Medical & Human Anatomy', image: '/portfolio/Longus-Capitis-Drawing.jpg', description: 'Focused anatomical illustration showing the longus capitis muscle.', components: ['Muscle location', 'Neck anatomy', 'Labels', 'Medical illustration'], process: 'Research → muscle mapping → illustration → annotation' },
  { title: 'Longus Capitis', category: 'Medical & Human Anatomy', image: '/portfolio/Longus-Capitis.png', description: 'Focused anatomical illustration showing the longus capitis muscle.', components: ['Muscle location', 'Neck anatomy', 'Labels', 'Medical illustration'], process: 'Research → muscle mapping → illustration → annotation' },
  { title: 'Nasal Cavity drawing', category: 'Medical & Human Anatomy', image: '/portfolio/Nasal-Cavity-Drawing.png', description: 'Detailed diagram explaining the structure of the nasal cavity.', components: ['Internal anatomy', 'Cross-section', 'Labels', 'Medical diagram'], process: 'Anatomical research → cross-section planning → illustration → final layout' },
  { title: 'Nasal Cavity', category: 'Medical & Human Anatomy', image: '/portfolio/Nasal Cavity.jpg', description: 'Detailed diagram explaining the structure of the nasal cavity.', components: ['Internal anatomy', 'Cross-section', 'Labels', 'Medical diagram'], process: 'Anatomical research → cross-section planning → illustration → final layout' },
  { title: 'Upper Arm Muscles', category: 'Medical & Human Anatomy', image: '/portfolio/Upper-Arm-Muscles-Labeled-Diagram.jpg', description: 'Labeled anatomical diagram showing the major muscles of the upper arm.', components: ['Muscle groups', 'Labels', 'Anatomical position', 'Reference'], process: 'Research → muscle mapping → illustration → educational composition' },
  { title: 'Skeletal Structures Drawing', category: 'Medical & Human Anatomy', image: '/portfolio/Skeletal-Structures.jpg', description: 'Labeled anatomical diagram showing the major muscles of the upper arm.', components: ['Muscle groups', 'Labels', 'Anatomical position', 'Reference'], process: 'Research → muscle mapping → illustration → educational composition' },
  { title: 'Muscles of The Upper Limb Upper Extremity', category: 'Medical & Human Anatomy', image: '/portfolio/Muscles-of-the-Upper-Limb-Upper-Extremity.jpg', description: 'Labeled anatomical diagram showing the major muscles of the upper arm.', components: ['Muscle groups', 'Labels', 'Anatomical position', 'Reference'], process: 'Research → muscle mapping → illustration → educational composition' },
  { title: 'Vomer Location', category: 'Medical & Human Anatomy', image: '/portfolio/Vomer-location.jpg', description: 'Focused anatomical illustration showing the location of the vomer bone.', components: ['Bone location', 'Skull anatomy', 'Labels', 'Reference'], process: 'Reference study → anatomical positioning → illustration → annotation' },
];


const categories: Category[] = ['All', 'Animal Anatomy', 'Scientific Infographics', 'Comparison & Scale', 'Coloring Pages', 'Educational Posters & Collage', 'Medical & Human Anatomy'];

export default function Home() {
  const [filter, setFilter] = useState<Category>('All');
  const [selected, setSelected] = useState<Project | null>(null);
  const [zoom, setZoom] = useState(1);

  const filteredProjects = useMemo(() => filter === 'All' ? projects : projects.filter((p) => p.category === filter), [filter]);

  const openProject = (project: Project) => { setSelected(project); setZoom(1); };
  const closeProject = () => { setSelected(null); setZoom(1); };

  return (
    <main className="min-h-screen bg-[#f7f9fc] text-[#172334]">
      <header className="sticky top-0 z-40 border-b border-[#dfe5ec] bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1 lg:px-10">
          <div className="flex items-center gap-3">
  <img
    src="/portfolio/profile.png"
    alt="Gopal"
    className="w-38 h-24 rounded-lg object-cover border-2 border-navy"
  />

  <span className="text-6xl font-bold text-navy tracking-tight">
    GOPAL
  </span>
</div>
<nav className="hidden items-center gap-8 text-lg font-medium md:flex">
  <a href="#work" className="hover:text-[#123f70]">Work</a>

  <a
    href="/resume/resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-[#123f70]"
  >
    Resume
  </a>

  <a href="#about" className="hover:text-[#123f70]">About</a>
  <a href="#services" className="hover:text-[#123f70]">Services</a>
  <a href="#contact" className="rounded-full bg-[#123f70] px-6 py-3 text-white">
    Let's work together
  </a>
</nav>
        </div>
      </header>

      <section className="border-b border-[#dfe5ec] bg-white">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-2 lg:items-center lg:px-10">
          <div>
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.22em] text-[#123f70]">Scientific . Character Illustrator · Graphic Designer</p>
            <h1 className="max-w-3xl text-5xl font-bold leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-7xl">I turn complex ideas into <span className="text-[#123f70]">clear visual stories.</span></h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#5c6b7c]">13+ years of experience creating scientific illustrations, animal anatomy, medical diagrams, educational infographics, coloring pages, character illustrations and publication-ready visual systems.</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#work" className="inline-flex items-center gap-2 rounded-full bg-[#123f70] px-6 py-4 text-sm font-semibold text-white">Explore selected work <ArrowUpRight size={17} /></a>
              <a href="#contact" className="rounded-full border border-[#d6dee8] px-6 py-4 text-sm font-semibold">Contact me</a>
            </div>
            <div className="mt-12 grid max-w-xl grid-cols-3 border-t border-[#dfe5ec] pt-8">
              <div><div className="text-3xl font-bold text-[#123f70]">13+</div><div className="text-sm text-[#6b7786]">Years experience</div></div>
              <div><div className="text-3xl font-bold text-[#123f70]">200+</div><div className="text-sm text-[#6b7786]">Projects</div></div>
              <div><div className="text-3xl font-bold text-[#123f70]">6</div><div className="text-sm text-[#6b7786]">Core disciplines</div></div>
            </div>
          </div>
          <div className="relative"><div className="absolute -inset-5 rounded-[2rem] bg-[#eef3f8]" /><div className="relative overflow-hidden rounded-[1.5rem] border border-[#dce4ec] bg-white p-4 shadow-sm"><img src="/portfolio/Nematode-Anatomy.jpg" alt="Featured Nematode Anatomy project" className="aspect-[4/5] w-full object-contain" /></div></div>
        </div>
      </section>

      <section id="work" className="border-b border-[#dfe5ec]"><div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#123f70]">Selected Work</p><h2 className="mt-4 text-4xl font-bold tracking-[-0.03em] sm:text-5xl">A portfolio built around clarity.</h2></div><p className="max-w-md text-[#687587]">A selection of work across scientific illustration, anatomy, information design, educational publishing and visual storytelling.</p></div>
        <div className="mt-10 flex flex-wrap gap-2">{categories.map((category) => <button key={category} onClick={() => setFilter(category)} className={`rounded-full border px-5 py-3 text-sm transition ${filter === category ? 'border-[#123f70] bg-[#123f70] text-white' : 'border-[#d7e0e9] bg-white hover:border-[#123f70]'}`}>{category}</button>)}</div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{filteredProjects.map((project, index) => <article key={`${project.title}-${index}`} onClick={() => openProject(project)} className="group cursor-pointer overflow-hidden rounded-2xl border border-[#dbe3eb] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"><div className="aspect-[4/3] overflow-hidden bg-white p-3"><img src={project.image} alt={project.title} className="h-full w-full object-contain transition duration-500 group-hover:scale-[1.04]" /></div><div className="border-t border-[#e5eaf0] p-5"><p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#123f70]">{project.category}</p><h3 className="mt-3 text-xl font-bold">{project.title}</h3><p className="mt-3 line-clamp-2 text-sm leading-6 text-[#687587]">{project.description}</p><div className="mt-5 flex items-center gap-2 text-sm font-semibold text-[#123f70]">View project <ArrowUpRight size={16} /></div></div></article>)}</div>
      </div></section>

      <section id="about" className="border-b border-[#dfe5ec] bg-white"><div className="mx-auto max-w-7xl px-6 py-24 lg:px-10"><div className="grid gap-16 lg:grid-cols-2"><div><p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#123f70]">About</p><h2 className="mt-4 max-w-xl text-4xl font-bold tracking-[-0.03em] sm:text-5xl">Research-led visual communication.</h2></div><div className="space-y-6 text-lg leading-8 text-[#687587]"><p>I create clear, accurate and visually engaging artwork for science, education, publishing and information design.</p><p>My work combines research, illustration, information hierarchy and careful visual execution to make complex subjects easier to understand.</p><p>From detailed animal anatomy to comparison graphics and educational systems, every project is built around clarity.</p></div></div></div></section>

      <section id="services" className="border-b border-[#dfe5ec]"><div className="mx-auto max-w-7xl px-6 py-24 lg:px-10"><p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#123f70]">Services</p><h2 className="mt-4 text-4xl font-bold tracking-[-0.03em] sm:text-5xl">Visual systems that make information easier to understand.</h2><div className="mt-12 grid gap-5 md:grid-cols-3">{[{title:'Scientific Illustration',text:'Detailed anatomy, biology and research-based visual communication.'},{title:'Information Design',text:'Infographics, comparison charts, maps and educational systems.'},{title:'Visual Storytelling',text:'Clear visual narratives for publishing, education and digital media.'}].map((service) => <div key={service.title} className="rounded-2xl border border-[#dbe3eb] bg-white p-7"><h3 className="text-xl font-bold">{service.title}</h3><p className="mt-3 leading-7 text-[#687587]">{service.text}</p></div>)}</div></div></section>

      <section id="contact" className="bg-[#123f70] text-white">
  <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/70">
      Contact
    </p>

    <div className="mt-6 flex flex-col justify-between gap-10 md:flex-row md:items-end">
      <h2 className="max-w-3xl text-4xl font-bold tracking-[-0.03em] sm:text-6xl">
        Have a complex idea that needs a clear visual form?
      </h2>

      <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=imgopalsaha1986@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-4 font-semibold text-[#123f70]"
      >
        Start a conversation
        <ArrowUpRight size={17} />
      </a>
    </div>
<div className="mt-8 flex flex-wrap gap-3">
  <a
    href="mailto:imgopalsaha1986@gmail.com"
    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white transition hover:bg-white/20"
  >
    <Mail size={16} />
    imgopalsaha1986@gmail.com
  </a>

  <a
    href="tel:+919038438783"
    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white transition hover:bg-white/20"
  >
    <Phone size={16} />
    +91 9038438783
  </a>
</div> 
</div>
</section>

      {selected && <div className="fixed inset-0 z-50 overflow-y-auto bg-[#101820]/75 p-4 backdrop-blur-sm sm:p-8" onClick={closeProject}><div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-white shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between border-b border-[#e2e8ef] px-6 py-5"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#123f70]">{selected.category}</p><h2 className="mt-2 text-2xl font-bold">{selected.title}</h2></div><button onClick={closeProject} className="rounded-full border border-[#dce3eb] p-3 hover:bg-[#f3f6f9]"><X size={20} /></button></div>
        <div className="grid gap-8 p-6 lg:grid-cols-[1.35fr_0.65fr] lg:p-8">
          <div className="rounded-2xl bg-[#f5f7fa] p-5"><div className="mb-4 flex items-center justify-between"><div className="flex items-center gap-2 text-sm text-[#687587]"><ZoomIn size={16} /> Zoom Detail</div><div className="flex items-center gap-2"><button onClick={() => setZoom((z) => Math.max(1, +(z - 0.25).toFixed(2)))} className="rounded-lg border p-2"><Minus size={16} /></button><button onClick={() => setZoom((z) => Math.min(3, +(z + 0.25).toFixed(2)))} className="rounded-lg border p-2"><Plus size={16} /></button><button onClick={() => setZoom(1)} className="rounded-lg border p-2"><RotateCcw size={16} /></button></div></div><div className="flex min-h-[420px] items-center justify-center overflow-auto rounded-xl border border-[#dce4ec] bg-white"><img src={selected.image} alt={selected.title} style={{ transform: `scale(${zoom})`, transformOrigin: 'center center' }} className="max-h-[650px] w-full object-contain transition-transform duration-200" /></div><p className="mt-3 text-xs text-[#7b8794]">Zoom is generated from the original final artwork. No fake process or before/after image is added.</p></div>
          <div className="flex flex-col justify-center"><p className="text-lg leading-8 text-[#687587]">{selected.description}</p><div className="mt-8"><h3 className="text-sm font-bold uppercase tracking-[0.15em] text-[#123f70]">Component Breakdown</h3><div className="mt-4 space-y-3">{selected.components.map((component) => <div key={component} className="rounded-xl border border-[#e0e6ed] bg-[#f8fafc] px-4 py-3 text-sm">{component}</div>)}</div></div><div className="mt-8"><h3 className="text-sm font-bold uppercase tracking-[0.15em] text-[#123f70]">Process</h3><p className="mt-4 leading-7 text-[#687587]">{selected.process}</p></div><div className="mt-8 rounded-2xl bg-[#123f70] p-5 text-white"><p className="text-sm font-semibold uppercase tracking-[0.15em] text-white/70">Authenticity</p><p className="mt-3 leading-7 text-white/85">This presentation uses the uploaded final artwork. A Before / After section is intentionally not shown because the uploaded project set does not contain authentic before-and-after source images for this project.</p></div></div>
        </div>
      </div></div>}
    </main>
  );
}
