# 2. Probability: term checklist

Not built (README). Source: Pishro-Nik, *Introduction to Probability, Statistics, and Random Processes* (probabilitycourse.com, whole book, 182 section pages cached 2026-10-28 in `design-refs/official-docs/cache/html/probabilitycourse-*`). Candidates were extracted by script from three kinds of marks: words the book sets in bold in running text (where it introduces a term), its highlighted boxes (`div.cbox`), and its numbered Definition, Theorem and Lemma blocks; duplicates of the same block were removed. Each candidate then got a decision: **term** (goes on the chapter page, with one or two sentences copied from that page as its definition), **same** (a later mention of a term already listed), **out** (emphasis, labels, statements with no name, formula-only boxes). Every quote was checked to be a contiguous part of the page text. Chapters 12 to 15 (simulation in MATLAB, R and Python; recursive methods) define no terms, so they have no page. The 17 terms of the earlier CS2023 topic pages keep their MathWorld rows in the section that covers them.

## Chapter 1 Basic Concepts

| ID | Section | Term | Kind | Decision | Note |
|---|---|---|---|---|---|
| B168 | 1.1.0 | Relative Frequency | bold | term |  |
| B169 | 1.1.0 | Law of Large Numbers | bold | term |  |
| B170 | 1.1.0 | Subjective Personal Belief | bold | term |  |
| B171 | 1.1.0 | axioms of probability | bold | out | mention only; the axioms are stated in P004 |
| B172 | 1.1.1 | noise | bold | out | communication example context, not a probability term |
| B173 | 1.2.0 | Subset | bold | term |  |
| B174 | 1.2.0 | Superset | bold | term |  |
| B175 | 1.2.0 | Null Set (Empty Set) | bold | term |  |
| B176 | 1.2.0 | - | bold | same | B175 |
| B177 | 1.2.0 | Universal Set | bold | term |  |
| B178 | 1.2.1 | Venn Diagram | bold | term |  |
| P001 | 1.2.2 | De Morgan's Law | theorem | term |  |
| B179 | 1.2.2 | Union | bold | term |  |
| B180 | 1.2.2 | Intersection | bold | term |  |
| B181 | 1.2.2 | Complement | bold | term |  |
| B182 | 1.2.2 | Difference (Subtraction) | bold | term |  |
| B183 | 1.2.2 | Mutually Exclusive (Disjoint) Sets | bold | term |  |
| B184 | 1.2.2 | - | bold | same | B183 |
| B185 | 1.2.2 | Partition | bold | term |  |
| B186 | 1.2.2 | - | bold | same | P001 |
| B187 | 1.2.2 | Distributive Law | bold | term |  |
| B188 | 1.2.2 | Cartesian Product | bold | term |  |
| B189 | 1.2.2 | - | bold | same | B188 |
| B190 | 1.2.2 | Multiplication Principle | bold | term |  |
| P002 | 1.2.3 | Countable and Uncountable Sets | definition | term |  |
| P003 | 1.2.3 | cardinality | theorem | out | theorem about subsets of countable sets, no name |
| B191 | 1.2.3 | Cardinality | bold | term |  |
| B192 | 1.2.3 | Inclusion-Exclusion Principle | bold | term |  |
| B193 | 1.2.3 | - | bold | same | B192 |
| B194 | 1.2.3 | Infinite Sets | bold | out | section label |
| B195 | 1.2.3 | - | bold | same | P002 |
| B196 | 1.2.3 | - | bold | same | P002 |
| B197 | 1.2.4 | Domain | bold | term |  |
| B198 | 1.2.4 | Co-domain | bold | term |  |
| B199 | 1.2.4 | Range of a Function | bold | term |  |
| B200 | 1.2.5 | countable | bold | out | worked-example item |
| B201 | 1.2.5 | countable | bold | out | worked-example item |
| B202 | 1.2.5 | uncountable | bold | out | worked-example item |
| B203 | 1.2.5 | countable | bold | out | worked-example item |
| B204 | 1.3.1 | Random Experiment | bold | term |  |
| B205 | 1.3.1 | Outcome | bold | term |  |
| B206 | 1.3.1 | Sample Space | bold | term |  |
| B207 | 1.3.1 | Trial | bold | term |  |
| B208 | 1.3.1 | Event | bold | term |  |
| P004 | 1.3.2 | Axioms of Probability | box | term |  |
| B209 | 1.3.2 | Probability Measure | bold | term |  |
| B210 | 1.3.3 | - | bold | same | B192 |
| B211 | 1.3.4 | Discrete Probability Model | bold | term |  |
| B212 | 1.3.4 | Finite Sample Spaces with Equally Likely Outcomes | bold | term |  |
| B213 | 1.4.0 | given that | bold | out | bold only for emphasis in a question |
| B214 | 1.4.0 | Prior Probability | bold | term |  |
| B215 | 1.4.0 | Conditional Probability | bold | term |  |
| B216 | 1.4.0 | Chain Rule for Conditional Probability | bold | term |  |
| P005 | 1.4.1 | independent | lemma | out | property of independent events, no name |
| B217 | 1.4.1 | Independent Events | bold | term |  |
| P006 | 1.4.4 | Conditionally Independent Events | definition | term |  |
| B218 | 1.4.4 | - | bold | same | P006 |

## Chapter 2 Combinatorics: Counting Methods

| ID | Section | Term | Kind | Decision | Note |
|---|---|---|---|---|---|
| B219 | 2.1.0 | counting | bold | out | section title |
| B220 | 2.1.0 | - | bold | same | B190 |
| B221 | 2.1.0 | - | bold | same | B190 |
| B222 | 2.1.0 | Sampling | bold | term |  |
| B223 | 2.1.0 | With or without replacement | bold | out | label for the two terms below |
| B224 | 2.1.0 | Sampling with Replacement | bold | term |  |
| B225 | 2.1.0 | Sampling without Replacement | bold | term |  |
| B226 | 2.1.0 | Ordered or unordered | bold | out | label for the two terms below |
| B227 | 2.1.0 | Ordered and Unordered Sampling | bold | term |  |
| B228 | 2.1.0 | - | bold | same | B227 |
| B229 | 2.1.2 | Permutation | bold | term |  |
| B230 | 2.1.3 | k-Combination | bold | term |  |
| B231 | 2.1.3 | Binomial Coefficient | bold | term |  |
| B232 | 2.1.3 | Bernoulli Trials and Binomial Distribution | bold | out | section label |
| B233 | 2.1.3 | Bernoulli Trial | bold | term |  |
| B234 | 2.1.3 | Binomial Experiment | bold | term |  |
| B235 | 2.1.3 | Binomial Formula | bold | term |  |
| B236 | 2.1.3 | Multinomial Coefficients | bold | out | section label |
| B237 | 2.1.3 | Multinomial Coefficients | bold | term |  |
| P007 | 2.1.4 | Proof | lemma | out | lemma, no name |
| P008 | 2.1.4 | Proof | theorem | out | theorem, no name |
| B238 | 2.1.5 | One-to-One Function | bold | term |  |
| B239 | 2.1.5 | without | bold | out | bold only for emphasis in an exercise |

## Chapter 3 Discrete Random Variables

| ID | Section | Term | Kind | Decision | Note |
|---|---|---|---|---|---|
| P009 | 3.1.1 | Random Variable | box | term |  |
| P010 | 3.1.3 | Probability Mass Function (PMF) | definition | term |  |
| B240 | 3.1.3 | - | bold | same | P010 |
| B241 | 3.1.3 | Probability Distribution | bold | term |  |
| P011 | 3.1.4 | Independent Random Variables | definition | term |  |
| P012 | 3.1.4 | - | definition | same | P011 |
| P013 | 3.1.5 | Bernoulli Distribution | definition | term |  |
| P014 | 3.1.5 | Geometric Distribution | definition | term |  |
| P015 | 3.1.5 | Binomial Distribution | definition | term |  |
| P016 | 3.1.5 | Bernoulli Distribution | lemma | out | lemma, no name (sum of Bernoulli is binomial) |
| P017 | 3.1.5 | Pascal (Negative Binomial) Distribution | definition | term |  |
| P018 | 3.1.5 | Hypergeometric Distribution | definition | term |  |
| P019 | 3.1.5 | Poisson Distribution | definition | term |  |
| P020 | 3.1.5 | Bernoulli Distribution | theorem | out | theorem statement without a bolded name; named in B250 |
| B242 | 3.1.5 | - | bold | same | P013 |
| B243 | 3.1.5 | - | bold | same | P013 |
| B244 | 3.1.5 | Indicator Random Variable | bold | term |  |
| B245 | 3.1.5 | - | bold | same | P014 |
| B246 | 3.1.5 | - | bold | same | P015 |
| B247 | 3.1.5 | - | bold | same | P017 |
| B248 | 3.1.5 | - | bold | same | P018 |
| B249 | 3.1.5 | - | bold | same | P019 |
| B250 | 3.1.5 | Poisson Approximation of the Binomial Distribution | bold | term |  |
| P021 | 3.2.1 | Cumulative Distribution Function (CDF) | definition | term |  |
| P022 | 3.2.2 | Expected Value | definition | term |  |
| P023 | 3.2.2 | - | theorem | out | linearity property, no name |
| B251 | 3.2.2 | - | bold | same | P022 |
| B252 | 3.2.3 | Law of the Unconscious Statistician (LOTUS) | bold | term |  |
| P024 | 3.2.4 | - | theorem | out | property of variance, no name |
| P025 | 3.2.4 | - | theorem | out | property of variance, no name |
| B253 | 3.2.4 | Variance | bold | term |  |
| B254 | 3.2.4 | - | bold | same | B253 |
| B255 | 3.2.4 | Standard Deviation | bold | term |  |
| B256 | 3.2.4 | - | bold | same | B255 |
| B257 | 3.2.4 | independent | bold | out | worked-example mention |
| B258 | 3.3.0 | memoryless | bold | out | exercise label |
| B259 | 3.3.0 | without | bold | out | bold only for emphasis in an exercise |
| B260 | 3.3.0 | Median | bold | term |  |

## Chapter 4 Continuous and Mixed Random Variables

| ID | Section | Term | Kind | Decision | Note |
|---|---|---|---|---|---|
| P026 | 4.1.0 | Continuous Random Variable | definition | term |  |
| P027 | 4.1.1 | Probability Density Function (PDF) | box | term |  |
| B261 | 4.1.1 | - | bold | same | P027 |
| B262 | 4.1.1 | - | bold | same | P027 |
| B263 | 4.1.1 | Range of a Random Variable | bold | term |  |
| B264 | 4.1.2 | - | bold | same | B252 |
| B265 | 4.1.2 | Variance | bold | out | no definition in text; covered by B253 |
| P028 | 4.1.3 | Method of Transformations | theorem | term |  |
| P029 | 4.1.3 |  | theorem | same | P028 |
| B266 | 4.1.3 | The Method of Transformations | bold | same | P028 |
| B267 | 4.2.2 | Memoryless Property | bold | term |  |
| P030 | 4.2.3 |  | theorem | out | unnamed statement |
| B268 | 4.2.3 | Standard Normal Random Variable | bold | term |  |
| B269 | 4.2.3 | Standard Normal CDF | bold | term |  |
| B270 | 4.2.3 | Normal Random Variable | bold | term |  |
| B271 | 4.2.4 | Gamma Function | bold | term |  |
| B272 | 4.2.4 | Gamma Distribution | bold | term |  |
| P031 | 4.3.2 | Dirac Delta Function | lemma | out | sifting property of delta, unnamed |
| P032 | 4.3.2 | Dirac Delta Function | definition | term |  |
| B273 | 4.3.2 | Dirac Delta Function | bold | same | P032 |
| B274 | 4.3.2 | Definition 4.3 | bold | out | cross-reference to Definition 4.3 |
| B275 | 4.3.2 | Generalized PDF | bold | term |  |
| B276 | 4.4.0 | Median | bold | term |  |
| B277 | 4.4.0 | Standard Cauchy Distribution | bold | term |  |
| B278 | 4.4.0 | Rayleigh Distribution | bold | term |  |
| B279 | 4.4.0 | Gamma | bold | same | B272 |

## Chapter 5 Joint Distributions

| ID | Section | Term | Kind | Decision | Note |
|---|---|---|---|---|---|
| P033 | 5.1.1 | Joint Probability Mass Function (PMF) | box | term |  |
| B280 | 5.1.1 | Joint Probability Mass Function | bold | term |  |
| B281 | 5.1.1 | Marginal PMF | bold | term |  |
| B282 | 5.1.1 | Caution | bold | out | caution about checking independence |
| P034 | 5.1.2 | joint cumulative function | lemma | out | unnamed property of joint CDF |
| B283 | 5.1.2 | Joint Cumulative Distribution Function | bold | term |  |
| B284 | 5.1.2 | joint cumulative distribution function | bold | same | B283 |
| B285 | 5.1.3 | conditional PMF | bold | out | intro mention; conditional PMF defined at B286 |
| B286 | 5.1.3 | Conditional PMF | bold | term |  |
| B287 | 5.1.3 | Conditional CDF | bold | term |  |
| B288 | 5.1.3 | conditional PMF | bold | same | B286 |
| B289 | 5.1.3 | conditional PMFs | bold | same | B286 |
| B290 | 5.1.4 | Law of the Unconscious Statistician (LOTUS) | bold | term | title guess is Linearity of Expectation (worked-example label) |
| P035 | 5.1.5 | law of iterated expectations | lemma | out | unnamed independence consequences |
| P036 | 5.2.1 | Jointly Continuous Random Variables | definition | term |  |
| B291 | 5.2.1 | jointly continuous | bold | same | P036 |
| B292 | 5.2.1 | Joint Probability Density Function | bold | term |  |
| B293 | 5.2.2 | joint cumulative function | bold | same | B283 |
| P037 | 5.2.3 | Independent Continuous Random Variables | box | term |  |
| P038 | 5.2.4 | LOTUS for Two Continuous Random Variables | box | term |  |
| P039 | 5.2.4 | Theorem | box | same | P028 |
| P040 | 5.2.4 | Theorem | box | out | unnamed statement |
| P041 | 5.3.1 | Covariance | box | term |  |
| P042 | 5.3.1 | Lemma | box | out | unnamed property list of covariance |
| P043 | 5.3.1 | Uncorrelated Random Variables | definition | term | title guess was covariance |
| B294 | 5.3.1 | Covariance | bold | term |  |
| B295 | 5.3.1 | Correlation Coefficient | bold | term |  |
| B296 | 5.3.1 | uncorrelated | bold | same | P043 |
| B297 | 5.3.1 | Positively Correlated | bold | term |  |
| B298 | 5.3.1 | Negatively Correlated | bold | term |  |
| P044 | 5.3.2 | Bivariate Normal (Jointly Normal) Random Variables | box | term |  |
| P045 | 5.3.2 | Standard Bivariate Normal Distribution | box | term |  |
| P046 | 5.3.2 | Bivariate Normal Distribution | box | term |  |
| P047 | 5.3.2 | bivariate normal | theorem | out | unnamed theorem |
| P048 | 5.3.2 | Theorem | box | out | unnamed theorem (conditional law of bivariate normal) |
| P049 | 5.3.2 | Theorem | box | out | unnamed theorem |
| B299 | 5.3.2 | bivariate normal | bold | same | P044 |
| B300 | 5.3.2 | jointly normal | bold | same | P044 |
| B301 | 5.3.2 | Standard Bivariate Normal Distribution | bold | term |  |

## Chapter 6 Multiple Random Variables

| ID | Section | Term | Kind | Decision | Note |
|---|---|---|---|---|---|
| P050 | 6.1.1 | Independent and Identically Distributed (i.i.d.) | box | term |  |
| P051 | 6.1.1 | Independent and Identically Distributed (i.i.d.) | definition | term |  |
| B302 | 6.1.1 | Independence | bold | same | B280 |
| P052 | 6.1.2 | Variance of a Sum of Random Variables | box | out | formula only, no named concept in box |
| P053 | 6.1.3 | Moment Generating Function | definition | term | title guess was MGFs |
| P054 | 6.1.3 | Moment Generating Function (MGF) | box | term |  |
| P055 | 6.1.3 | moment generating functions (MGFs) | theorem | out | unnamed uniqueness theorem for MGFs |
| B303 | 6.1.3 | moment generating functions (MGFs) | bold | same | P053 |
| B304 | 6.1.3 | nth Moment | bold | term |  |
| B305 | 6.1.3 | nth Central Moment | bold | term |  |
| P056 | 6.1.5 | Correlation Matrix and Covariance Matrix | box | out | formula only, names inside formula |
| P057 | 6.1.5 | random vector | theorem | out | unnamed theorem (covariance matrix is PSD) |
| B306 | 6.1.5 | Random Vector | bold | term |  |
| B307 | 6.1.5 | x , y | bold | out | notation letters |
| B308 | 6.1.5 | Expected Value Vector | bold | term |  |
| B309 | 6.1.5 | mean vector | bold | same | B308 |
| B310 | 6.1.5 | X | bold | out | single letter |
| B311 | 6.1.5 | Random Matrix | bold | term |  |
| B312 | 6.1.5 | M | bold | out | single letter |
| B313 | 6.1.5 | M | bold | out | single letter |
| B314 | 6.1.5 | M | bold | out | single letter |
| B315 | 6.1.5 | M | bold | out | single letter |
| B316 | 6.1.5 | X | bold | out | single letter |
| B317 | 6.1.5 | Y | bold | out | single letter |
| B318 | 6.1.5 | A | bold | out | single letter |
| B319 | 6.1.5 | Correlation Matrix | bold | term | text stops before the matrix display |
| B320 | 6.1.5 | Covariance Matrix | bold | term | candidate text is cut off at "is"; definition is the displayed matrix after |
| B321 | 6.1.5 | $C_X$ | bold | out | single letter or symbol |
| B322 | 6.1.5 | X | bold | out | single letter or symbol |
| B323 | 6.1.5 | X | bold | out | single letter or symbol |
| B324 | 6.1.5 | Y | bold | out | single letter or symbol |
| B325 | 6.1.5 | A | bold | out | single letter or symbol |
| B326 | 6.1.5 | U | bold | out | single letter or symbol |
| B327 | 6.1.5 | U | bold | out | single letter or symbol |
| B328 | 6.1.5 | X | bold | out | single letter or symbol |
| B329 | 6.1.5 | X | bold | out | single letter or symbol |
| B330 | 6.1.5 | M | bold | out | single letter or symbol |
| B331 | 6.1.5 | Positive Semi-Definite (PSD) Matrix | bold | term |  |
| B332 | 6.1.5 | M | bold | out | single letter |
| B333 | 6.1.5 | Positive Definite (PD) Matrix | bold | term |  |
| B334 | 6.1.5 | U | bold | out | single letter |
| B335 | 6.1.5 | V | bold | out | single letter |
| B336 | 6.1.5 | Cross Correlation Matrix | bold | term |  |
| B337 | 6.1.5 | Cross Covariance Matrix | bold | term |  |
| B338 | 6.1.5 | X | bold | out | single letter |
| B339 | 6.1.5 | Y | bold | out | single letter |
| B340 | 6.1.5 | X | bold | out | single letter |
| B341 | 6.1.5 | A | bold | out | single letter |
| B342 | 6.1.5 | Y | bold | out | single letter |
| B343 | 6.1.5 | bivariate normal | bold | same | P044 |
| B344 | 6.1.5 | jointly normal | bold | same | P044 |
| B345 | 6.1.5 | Standard Normal Random Vector | bold | term |  |
| B346 | 6.1.5 | X | bold | out | single letter |
| B347 | 6.1.5 | C | bold | out | single letter |
| B348 | 6.1.5 | X | bold | out | single letter |
| B349 | 6.1.5 | C | bold | out | single letter |
| B350 | 6.1.5 | Q | bold | out | single letter |
| B351 | 6.1.5 | D | bold | out | single letter |
| B352 | 6.1.5 | X | bold | out | single letter |
| B353 | 6.1.5 | C | bold | out | single letter |
| B354 | 6.1.5 | X | bold | out | single letter |
| B355 | 6.1.6 | Probability Generating Function (PGF) | bold | term |  |
| B356 | 6.1.6 | Q | bold | out | single letter |
| B357 | 6.2.1 | Union Bound | bold | term |  |
| B358 | 6.2.1 | Boole's inequality | bold | same | B357 |
| B359 | 6.2.1 | Bonferroni Inequalities | bold | term |  |
| B360 | 6.2.1 | Expected Value of the Number of Events | bold | term |  |
| B361 | 6.2.2 | Markov's Inequality | bold | term |  |
| B362 | 6.2.2 | B362 | bold | out | label |
| B363 | 6.2.2 | Chebyshev's Inequality | bold | term |  |
| B364 | 6.2.3 | B364 | bold | out | sidebar label |
| B365 | 6.2.4 | Cauchy-Schwarz Inequality | bold | term |  |
| P058 | 6.2.5 | Convex Function | definition | term |  |
| B366 | 6.2.5 | B366 | bold | same | P058 |
| B367 | 6.2.5 | Jensen's Inequality | bold | term |  |
| B368 | 6.2.5 | Concave Function | bold | term |  |
| B369 | 6.2.5 | B369 | bold | same | P058 |
| B370 | 6.2.5 | B370 | bold | same | B368 |
| B371 | 6.2.6 | B371 | bold | out | exercise label |
| B372 | 6.3.0 | B372 | bold | out | exercise fragment |
| B373 | 6.3.0 | B373 | bold | out | exercise fragment |
| B374 | 6.3.0 | B374 | bold | out | exercise fragment |
| B375 | 6.3.0 | B375 | bold | out | exercise fragment |
| B376 | 6.3.0 | B376 | bold | out | exercise fragment |
| B377 | 6.3.0 | B377 | bold | out | exercise fragment |

## Chapter 7 Limit Theorems and Convergence of Random Variables

| ID | Section | Term | Kind | Decision | Note |
|---|---|---|---|---|---|
| P059 | 7.1.1 | Sample Mean | definition | term |  |
| B378 | 7.1.1 | Law of Large Numbers | bold | term |  |
| B379 | 7.1.1 | B379 | bold | out | see B390 |
| B380 | 7.1.1 | B380 | bold | same | P059 |
| B381 | 7.1.1 | Weak Law of Large Numbers | bold | term |  |
| P060 | 7.1.2 | Central Limit Theorem (CLT) | box | term |  |
| B382 | 7.1.2 | Central Limit Theorem | bold | term |  |
| B383 | 7.1.2 | B383 | bold | out | label |
| B384 | 7.1.2 | Continuity Correction | bold | term |  |
| P061 | 7.2.1 | Convergence of a Sequence of Numbers | box | term |  |
| P062 | 7.2.1 | Convergence of a Sequence | definition | term |  |
| P063 | 7.2.4 | Convergence in Distribution | box | term |  |
| P064 | 7.2.4 | P064 | theorem | out | unnamed theorem (integer-valued convergence in distribution) |
| B385 | 7.2.4 | B385 | bold | out | proof step |
| P065 | 7.2.5 | Convergence in Probability | box | term |  |
| P066 | 7.2.5 | P066 | theorem | out | unnamed theorem |
| P067 | 7.2.6 | Convergence in Mean | box | term |  |
| P068 | 7.2.6 | P068 | theorem | out | unnamed theorem |
| B386 | 7.2.6 | Convergence in Mean | bold | term |  |
| B387 | 7.2.6 | Mean-Square Convergence | bold | term |  |
| P069 | 7.2.7 | Almost Sure Convergence | box | term |  |
| P070 | 7.2.7 | P070 | theorem | out | unnamed sufficient-condition theorem |
| B388 | 7.2.7 | B388 | bold | out | see B389 |
| B389 | 7.2.7 | Almost Sure Convergence | bold | term |  |
| B390 | 7.2.7 | Strong Law of Large Numbers | bold | term |  |
| B391 | 7.2.7 | Continuous Mapping Theorem | bold | term |  |

## Chapter 8 Statistical Inference I: Classical Methods

| ID | Section | Term | Kind | Decision | Note |
|---|---|---|---|---|---|
| P071 | 8.1.0 | Statistical Inference | box | term |  |
| B392 | 8.1.0 | Frequentist Inference | bold | term |  |
| B393 | 8.1.0 | Bayesian Inference | bold | term |  |
| P072 | 8.1.1 | Random Sample | box | term |  |
| P073 | 8.1.1 | P073 | theorem | out | unnamed theorem (order statistics PDF) |
| B394 | 8.1.1 | Point Estimator | bold | term |  |
| B395 | 8.1.1 | Estimate | bold | term |  |
| B396 | 8.1.1 | B396 | bold | out | label |
| B397 | 8.1.1 | B397 | bold | out | label |
| B398 | 8.1.1 | B398 | bold | out | label |
| B399 | 8.1.1 | Order Statistics | bold | term |  |
| P074 | 8.2.1 | Bias of a Point Estimator | box | term |  |
| P075 | 8.2.1 | Consistent Estimator | theorem | term | theorem: MSE tending to 0 implies consistency |
| P076 | 8.2.2 | Sample Variance | box | term |  |
| P077 | 8.2.2 | P077 | box | out | code |
| B400 | 8.2.2 | Sample Variance | bold | term |  |
| B401 | 8.2.2 | Sample Standard Deviation | bold | term |  |
| P078 | 8.2.3 | Likelihood Function | box | term |  |
| B402 | 8.2.3 | Likelihood Function | bold | term |  |
| P079 | 8.2.4 | Asymptotic Properties of MLEs | box | term |  |
| P080 | 8.2.5 | P080 | box | out | code |
| B403 | 8.3.0 | Interval Estimation | bold | term |  |
| B404 | 8.3.0 | Length of an Interval | bold | term |  |
| B405 | 8.3.0 | Confidence Level | bold | term |  |
| P081 | 8.3.1 | Interval Estimation | box | term |  |
| B406 | 8.3.1 | B406 | bold | same | B405 |
| P082 | 8.3.2 | Pivotal Quantity | box | term |  |
| P083 | 8.3.2 | P083 | box | out | confidence-interval formula box, no named definition |
| P084 | 8.3.2 | P084 | box | out | confidence-interval formula box, no named definition |
| P085 | 8.3.2 | P085 | box | out | confidence-interval formula box, no named definition |
| P086 | 8.3.2 | P086 | box | out | confidence-interval formula box, no named definition |
| B407 | 8.3.2 | B407 | bold | same | P082 |
| B408 | 8.3.2 | B408 | bold | same | P082 |
| P087 | 8.3.3 | Chi-Squared Critical Value | box | term | book notation; name is descriptive |
| P088 | 8.3.3 | Chi-Squared Distribution | definition | term |  |
| P089 | 8.3.3 | Chi-Squared Distribution of the Scaled Sample Variance | box | term |  |
| P090 | 8.3.3 | P090 | theorem | out | unnamed theorem (sample variance of normal sample) |
| P091 | 8.3.3 | Student's t-Distribution | definition | term |  |
| P092 | 8.3.3 | P092 | theorem | out | unnamed theorem |
| P093 | 8.3.3 | P093 | box | out | confidence-interval formula box, no named definition |
| P094 | 8.3.3 | P094 | box | out | confidence-interval formula box, no named definition |
| P095 | 8.3.3 | P095 | box | out | confidence-interval formula box, no named definition |
| B409 | 8.3.3 | B409 | bold | same | P088 |
| B410 | 8.3.3 | B410 | bold | same | P088 |
| B411 | 8.3.3 | B411 | bold | same | P091 |
| B412 | 8.3.3 | B412 | bold | same | P091 |
| P096 | 8.4.2 | Statistic | box | term |  |
| P097 | 8.4.2 | Statistic | definition | term |  |
| B413 | 8.4.2 | Alternative Hypothesis | bold | term | also null hypothesis |
| B414 | 8.4.2 | Simple Hypothesis | bold | term |  |
| B415 | 8.4.2 | Composite Hypothesis | bold | term |  |
| B416 | 8.4.2 | Acceptance Region | bold | term |  |
| B417 | 8.4.2 | Rejection Region | bold | term |  |
| B418 | 8.4.2 | Hypothesis | bold | term | title guess was type I error; text has no definition |
| B419 | 8.4.2 | Significance Level | bold | term |  |
| B420 | 8.4.2 | B420 | bold | same | B419 |
| B421 | 8.4.2 | Type II Error | bold | term |  |
| B422 | 8.4.2 | Trade-off Between Type I and Type II Error | bold | term |  |
| P098 | 8.4.3 | P098 | box | out | code |
| B423 | 8.4.3 | B423 | bold | out | discussion heading |
| B424 | 8.4.3 | B424 | bold | out | example heading |
| P099 | 8.4.4 | P-Value | box | term |  |
| P100 | 8.4.4 | P-Value | box | term |  |
| P101 | 8.4.5 | Likelihood Ratio Test | box | term |  |
| P102 | 8.4.5 | P102 | box | same | P101 |
| B425 | 8.4.5 | B425 | bold | same | B402 |
| B426 | 8.5.0 | Linear Model | bold | term |  |
| B427 | 8.5.0 | Regression Line | bold | term |  |
| B428 | 8.5.0 | Predictor | bold | term | also explanatory variable |
| B429 | 8.5.0 | B429 | bold | same | B428 |
| B430 | 8.5.0 | Response Variable | bold | term |  |
| B431 | 8.5.1 | Simple Linear Regression | bold | term |  |
| P103 | 8.5.2 | P103 | box | same | B431 |
| P104 | 8.5.2 | P104 | box | out | code |
| P105 | 8.5.2 | Coefficient of Determination | box | term |  |
| B432 | 8.5.2 | Fitted Value | bold | term |  |
| B433 | 8.5.2 | Residuals | bold | term |  |
| B434 | 8.5.3 | Method of Least Squares | bold | term |  |
| B435 | 8.5.3 | B435 | bold | same | B434 |
| B436 | 8.5.4 | Multiple Linear Regression | bold | term |  |
| P106 | 8.5.5 | P106 | box | out | code |
| B437 | 8.5.5 | The Method of Maximum Likelihood | bold | out | worked-example label |

## Chapter 9 Statistical Inference II: Bayesian Inference

| ID | Section | Term | Kind | Decision | Note |
|---|---|---|---|---|---|
| P107 | 9.1.0 | Bayesian Statistical Inference | box | term |  |
| B438 | 9.1.0 | Frequentist Approach | bold | term |  |
| B439 | 9.1.0 | Bayesian Approach | bold | term |  |
| P108 | 9.1.2 | Maximum A Posteriori (MAP) Estimation | box | term | sentence continues in a display |
| P109 | 9.1.2 | Maximum A Posteriori (MAP) Estimation | box | term |  |
| B440 | 9.1.2 | maximum a posteriori (MAP) estimation | bold | same | P108 |
| P110 | 9.1.4 | Minimum Mean Squared Error (MMSE) Estimation | box | term |  |
| P111 | 9.1.5 | Mean Squared Error (MSE) of an Estimator | box | term |  |
| P112 | 9.1.5 | mean squared error | lemma | out | unnamed lemma on estimation error |
| P113 | 9.1.5 | Some Additional Properties of the MMSE Estimator | box | out | list of properties, no definition |
| P114 | 9.1.6 | linear MMSE | theorem | out | unnamed theorem; see P115 |
| P115 | 9.1.6 | Linear MMSE Estimator | box | term |  |
| B441 | 9.1.6 | linear MMSE | bold | same | P115 |
| B442 | 9.1.7 | Orthogonality Principle | bold | term | named, not defined in this sentence |
| P116 | 9.1.8 | MAP Hypothesis Test | box | term |  |
| P117 | 9.1.8 | Minimum Cost Hypothesis Test | box | term |  |
| B443 | 9.1.8 | Posterior Risk | bold | term |  |
| P118 | 9.1.9 | Bayesian Credible Interval | box | term |  |

## Chapter 10 Introduction to Random Processes

| ID | Section | Term | Kind | Decision | Note |
|---|---|---|---|---|---|
| P119 | 10.1.0 | Random Process | box | term |  |
| B444 | 10.1.0 | Random Process | bold | term |  |
| B445 | 10.1.0 | stochastic process | bold | same | B444 |
| B446 | 10.1.0 | Continuous-Time Random Process | bold | term |  |
| B447 | 10.1.0 | Discrete-Time Random Process | bold | term | source text truncated |
| B448 | 10.1.0 | Random Sequence | bold | term |  |
| B449 | 10.1.0 | Sample Function | bold | term |  |
| B450 | 10.1.0 | sample path | bold | same | B449 |
| B451 | 10.1.0 | realization | bold | same | B449 |
| B452 | 10.1.0 | random signals | bold | same | B444 |
| P120 | 10.1.2 | Mean Function of a Random Process | box | term |  |
| P121 | 10.1.2 | Autocovariance Function | box | term |  |
| P122 | 10.1.3 | Cross-Correlation Function | box | term |  |
| B453 | 10.1.3 | Cross-Correlation Function | bold | term |  |
| B454 | 10.1.3 | Cross-Covariance Function | bold | term |  |
| P123 | 10.1.4 | Strict-Sense Stationary Process | box | term |  |
| P124 | 10.1.4 | Wide-Sense Cyclostationary Process | box | term |  |
| B455 | 10.1.4 | Stationary Process | bold | term |  |
| B456 | 10.1.4 | Weak-Sense Stationary Process | bold | term |  |
| B457 | 10.1.4 | wide-sense stationary | bold | same | B456 |
| B458 | 10.1.4 | WSS | bold | same | B456 |
| B459 | 10.1.4 | Expected (Average) Power | bold | term |  |
| B460 | 10.1.4 | even function | bold | out | ordinary math word; property of R_X |
| B461 | 10.1.4 | Cyclostationary Process | bold | term |  |
| B462 | 10.1.4 | Mean-Square Continuity | bold | term | source text truncated |
| P125 | 10.1.5 | Gaussian Random Process | box | term |  |
| P126 | 10.1.5 | jointly normal | theorem | out | unnamed theorem |
| B463 | 10.1.5 | Jointly Normal Random Variables | bold | term | source text truncated |
| B464 | 10.1.5 | normal | bold | out | generic word; definition under B467 |
| B465 | 10.1.5 | Gaussian | bold | out | generic word; definition under B467 |
| B466 | 10.1.5 | X | bold | out | variable name |
| B467 | 10.1.5 | Gaussian Random Process | bold | term |  |
| P127 | 10.2.1 | Power Spectral Density (PSD) | box | term | formula only; no words to bold |
| P128 | 10.2.1 | Wiener-Khinchin Theorem | box | out | inverse Fourier transform formula only; no prose in box |
| B468 | 10.2.1 | Fourier | bold | out | background Fourier transform, not defined here |
| P129 | 10.2.2 | Theorem | box | out | unnamed theorem |
| P130 | 10.2.2 | Mean of an LTI System Output | box | out | formula only |
| B469 | 10.2.2 | Linear Time-Invariant (LTI) System | bold | term |  |
| B470 | 10.2.2 | impulse response | bold | same | B469 |
| B471 | 10.2.2 | Transfer Function | bold | term |  |
| P131 | 10.2.3 | Gaussian Process through an LTI System | box | term |  |
| P132 | 10.2.4 | White Noise Process | box | term |  |

## Chapter 11 Some Important Random Processes

| ID | Section | Term | Kind | Decision | Note |
|---|---|---|---|---|---|
| P133 | 11.1.1 | Counting Process | definition | term |  |
| P134 | 11.1.1 | Stationary Increments | box | term |  |
| B472 | 11.1.1 | counting process | bold | same | P133 |
| B473 | 11.1.1 | Independent Increments | bold | term |  |
| B474 | 11.1.1 | stationary increments | bold | same | P134 |
| P135 | 11.1.2 | Poisson random variable: | theorem | out | unnamed theorem |
| P136 | 11.1.2 | Poisson Process | box | term |  |
| P137 | 11.1.2 | Poisson Process (Second Definition) | box | term | alternative definition of the same process |
| P138 | 11.1.2 | Interarrival Times | box | term |  |
| P139 | 11.1.2 | Arrival Times | box | term |  |
| B475 | 11.1.2 | Poisson Random Variable | bold | term |  |
| B476 | 11.1.2 | interarrival times | bold | same | P138 |
| B477 | 11.1.2 | Erlang Distribution | bold | term |  |
| P140 | 11.1.3 | Merging Independent Poisson Processes | box | term |  |
| P141 | 11.1.3 | Splitting a Poisson Process | box | term | splitting rule; result stated in later sentence |
| P142 | 11.1.4 | Nonhomogeneous Poisson Process | box | term |  |
| P143 | 11.1.4 | Nonhomogeneous Poisson Process | box | out | formula only |
| P144 | 11.2.1 | Markov Chain | box | term |  |
| P145 | 11.2.1 | Transition Probability | box | out | formula only |
| B478 | 11.2.1 | Transition Probabilities | bold | term |  |
| B479 | 11.2.2 | State Transition Matrix | bold | term |  |
| B480 | 11.2.2 | transition probability matrix | bold | same | B479 |
| B481 | 11.2.2 | State Transition Diagram | bold | term |  |
| P146 | 11.2.3 | State Distribution of a Markov Chain | box | out | formula only |
| B482 | 11.2.3 | Chapman-Kolmogorov Equation | bold | term |  |
| P147 | 11.2.4 | Accessible State | box | term |  |
| P148 | 11.2.5 | Absorption Probabilities | box | term |  |
| P149 | 11.2.5 | Mean Hitting Times | box | term |  |
| P150 | 11.2.5 | Mean Return Times | box | term |  |
| B483 | 11.2.5 | absorption probabilities | bold | same | P148 |
| B484 | 11.2.5 | mean hitting times | bold | same | P149 |
| B485 | 11.2.5 | mean return times | bold | same | P150 |
| B486 | 11.2.5 | Absorbing State | bold | term |  |
| P151 | 11.2.6 | Limiting Distribution | box | term |  |
| P152 | 11.2.6 | Limiting Distribution of a Finite Markov Chain | box | term |  |
| P153 | 11.2.6 | Theorem | box | out | unnamed theorem |
| P154 | 11.3.1 | Continuous-Time Markov Chain | box | term |  |
| P155 | 11.3.1 | Transition Matrix (Continuous-Time Markov Chain) | box | term |  |
| B487 | 11.3.1 | Holding Time | bold | term |  |
| B488 | 11.3.1 | Jump Chain | bold | term |  |
| B489 | 11.3.1 | the embedded Markov chain | bold | same | B488 |
| B490 | 11.3.1 | Holding Time Parameter | bold | term |  |
| P156 | 11.3.2 | Stationary Distribution of a Continuous-Time Markov Chain | box | term |  |
| P157 | 11.3.2 | Limiting Distributions | box | same | P151 |
| P158 | 11.3.2 | Theorem | box | out | unnamed theorem |
| P159 | 11.3.3 | Generator Matrix | box | term |  |
| P160 | 11.3.3 | Forward and Backward Equations | box | term |  |
| P161 | 11.3.3 | Stationary Distribution and the Generator Matrix | box | term |  |
| B491 | 11.3.3 | Transition Rate Out of a State | bold | term |  |
| B492 | 11.3.3 | Transition Rate Between States | bold | term |  |
| B493 | 11.3.3 | Transition Rate Diagram | bold | term |  |
| B494 | 11.3.4 | queuing system | bold | out | worked-example label |
| P162 | 11.4.2 | Standard Brownian Motion | box | term |  |
| P163 | 11.4.2 | Covariance of Standard Brownian Motion | box | out | formula only |
| B495 | 11.4.3 | Geometric Brownian Motion | bold | out | worked-example label |
| B496 | 11.5.0 | Random Walk | bold | out | worked-example label |
| B497 | 11.5.0 | Gambler's Ruin Problem | bold | term |  |

## Chapter 12 Introduction to Simulation Using MATLAB

| ID | Section | Term | Kind | Decision | Note |
|---|---|---|---|---|---|
| P164 | 12 | Chapter 12 is only available in the PDF format. Please click on the link below to see the file | box | out | PDF link box |

## Chapter 13 Introduction to Simulation Using R

| ID | Section | Term | Kind | Decision | Note |
|---|---|---|---|---|---|
| P165 | 13 | Chapter 13 is only available in the PDF format. Please click on the link below to see the file | box | out | PDF link box |

## Chapter 14 Introduction to Simulation Using Python

| ID | Section | Term | Kind | Decision | Note |
|---|---|---|---|---|---|
| P166 | 14 | Chapter 14 is only available in the PDF format. Please click on the link below to see the file | box | out | PDF link box |

## Chapter 15 Recursive Methods

| ID | Section | Term | Kind | Decision | Note |
|---|---|---|---|---|---|
| P167 | 15 | Chapter 15 is only available in the PDF format. Please click on the link below to see the file | box | out | PDF link box |
