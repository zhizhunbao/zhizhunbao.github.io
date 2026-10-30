# 1 Real Analysis: term checklist

Source: Lebl, *Basic Analysis I & II: Introduction to Real Analysis* (jirka.org/ra/html, May 22, 2026 edition), cached 2026-10-30 a chapter at a time: section pages as Markdown in `design-refs/official-docs/cache/md/jirka-ra-html-*` and as raw HTML in `cache/data/lebl-ra-raw/`; the Index is `cache/html/jirka-ra-html-ra-16-2-html.html`.

The terms are the book's Index, each placed in the section its entry first links to and quoted from the linked element: the Definition box, or the sentence of the paragraph or item that names the term (with the sentence before it where the term's sentence cannot stand alone). An Index entry that is another name in the same sentence is merged into that row. Added to the Index: the words the running text emphasizes as names of concepts. Index entries that link into exercises and examples are terms too, each quoted from its exercise or example (first pass of chapters 1 to 9 missed 15 of them, whose link anchors contain "exercise" or "example"; added 2026-10-30). Book macros are written in standard TeX (`\R` as `\mathbb{R}`, `\sabs{x}` as `\lvert x \rvert`, `\coloneqq` as `:=`); footnotes inside a quoted sentence are left out.

## Chapter 0 Introduction (done 2026-10-30)

| Term | Section | Where the book defines it | Taken from | Note |
|---|---|---|---|---|
| Analysis | 0.2 | section 0.2 | first sentence of the section (not in the Index) |  |
| Real Analysis | 0.2 | section 0.2 | emphasized in the text (not in the Index) |  |
| Complex Analysis | 0.2 | section 0.2 | emphasized in the text (not in the Index) |  |
| Naïve Set Theory | 0.3 | section 0.3 | Index | Index entry "set theory" links the whole section, not a sentence |
| Set | 0.3 | Definition 0.3.1 | Index |  |
| Element | 0.3 | Definition 0.3.1 | Index | Index entry "member" is the same sentence |
| Empty Set | 0.3 | Definition 0.3.1 | Index |  |
| Universe | 0.3 | section 0.3 | Index |  |
| Subset | 0.3 | Definition 0.3.2 | Index |  |
| Equal | 0.3 | Definition 0.3.2 | Index |  |
| Proper Subset | 0.3 | Definition 0.3.2 | Index |  |
| Set Building Notation | 0.3 | section 0.3 | Index |  |
| Natural Numbers | 0.3 | Example 0.3.3 | Index |  |
| Integers | 0.3 | Example 0.3.3 | Index |  |
| Rational Numbers | 0.3 | Example 0.3.3 | Index |  |
| Union | 0.3 | Definition 0.3.4 | Index |  |
| Intersection | 0.3 | Definition 0.3.4 | Index |  |
| Set-Theoretic Difference | 0.3 | Definition 0.3.4 | Index | Index entry "complement relative to" is the same sentence |
| Complement | 0.3 | Definition 0.3.4 | Index |  |
| Disjoint | 0.3 | Definition 0.3.4 | Index |  |
| Venn Diagram | 0.3 | section 0.3 | Index |  |
| DeMorgan’s Theorem | 0.3 | Theorem 0.3.5 | Index | titled DeMorgan |
| Least Element | 0.3 | section 0.3 | Index |  |
| Well Ordering Property | 0.3 | Axiom (Well ordering property of ℕ) | Index | Index links the sentence before the Axiom box |
| Axiom | 0.3 | section 0.3 | Index |  |
| Principle of Induction | 0.3 | Theorem 0.3.6 | Index | titled Principle of induction; Index entry "induction" links the sentence before it |
| Basis Statement | 0.3 | Theorem 0.3.6 | Index |  |
| Induction Step | 0.3 | Theorem 0.3.6 | Index |  |
| Induction Hypothesis | 0.3 | section 0.3 | Index |  |
| Strong Induction | 0.3 | section 0.3 | Index | Index entry "principle of strong induction" is Theorem 0.3.9, titled the same |
| Function | 0.3 | section 0.3 | Index | Index entries "set-theoretic function", "map" and "mapping" are the same paragraph |
| Cartesian Product | 0.3 | Definition 0.3.10 | Index |  |
| Graph | 0.3 | Definition 0.3.11 | Index |  |
| Domain | 0.3 | Definition 0.3.11 | Index |  |
| Range | 0.3 | Definition 0.3.11 | Index |  |
| Codomain | 0.3 | Definition 0.3.11 | Index |  |
| Image | 0.3 | Definition 0.3.13 | Index | Index entry "direct image" is the same sentence |
| Inverse Image | 0.3 | Definition 0.3.13 | Index |  |
| Injective | 0.3 | Definition 0.3.17 | Index | Index entries "one-to-one" and "injection" are the same paragraph |
| Surjective | 0.3 | Definition 0.3.17 | Index | Index entries "onto" and "surjection" are the same paragraph |
| Bijective | 0.3 | Definition 0.3.17 | Index | Index entry "bijection" is the same sentence |
| Inverse Function | 0.3 | section 0.3 | Index |  |
| Composition of Functions | 0.3 | Definition 0.3.18 | Index |  |
| Binary Relation | 0.3 | Definition 0.3.19 | Index | Index entry "relation" is the same box |
| Reflexive Relation | 0.3 | Definition 0.3.21 | Index |  |
| Symmetric Relation | 0.3 | Definition 0.3.21 | Index |  |
| Transitive Relation | 0.3 | Definition 0.3.21 | Index |  |
| Equivalence Relation | 0.3 | Definition 0.3.21 | Index |  |
| Equivalence Class | 0.3 | Definition 0.3.23 | Index |  |
| Cardinality | 0.3 | Definition 0.3.26 | Index |  |
| Finite | 0.3 | Definition 0.3.27 | Index |  |
| Infinite | 0.3 | Definition 0.3.27 | Index |  |
| Cantor–Bernstein–Schröder Theorem | 0.3 | section 0.3 | Index | Index entry "Cantor–Bernstein–Schröder" |
| Countably Infinite | 0.3 | Definition 0.3.29 | Index |  |
| Countable | 0.3 | Definition 0.3.29 | Index |  |
| Uncountable | 0.3 | Definition 0.3.29 | Index |  |
| Power Set | 0.3 | Definition 0.3.33 | Index |  |
| Cantor’s Theorem | 0.3 | Theorem 0.3.34 | Index | titled Cantor; the Index entry also links Theorem 1.4.2, a different theorem with the same name |
| Symmetric Difference | 0.3 | Exercise 0.3.7 | Index | named in an exercise |

0.1 About this book defines no terms (it says how to use the book: prerequisites, two course plans, the Darboux approach, proof style, the := notation, other books); its page lists none and its figure box is empty.

Left out:

- Book titles 0.1 emphasizes (Book of Proof, Principles of Mathematical Analysis, "baby Rudin", "big Rudin" and others).
- Theorem, Proposition, Lemma, Corollary: the book's labels for its results (0.3).
- Definition 0.3.28 (comparing cardinalities): it names no new term.
- Untitled propositions: 0.3.15, 0.3.16, 0.3.24.
- Emphasized statements and words that are not names: the characterization of infinite sets, Futurama (a footnote), (Tricky).
- Two terms of the same name sit on two pages: Cantor's Theorem is Theorem 0.3.34 (power sets) and Theorem 1.4.2 (ℝ is uncountable); the Index entry links both.

## Chapter 1 Real Numbers (done 2026-10-30)

| Term | Section | Where the book defines it | Taken from | Note |
|---|---|---|---|---|
| Real Numbers | 1.1 | section 1.1 | Index |  |
| Ordered Set | 1.1 | Definition 1.1.1 | Index |  |
| Trichotomy | 1.1 | Definition 1.1.1 | Index |  |
| Transitivity | 1.1 | Definition 1.1.1 | emphasized in the text (not in the Index) |  |
| Bounded Above | 1.1 | Definition 1.1.2 | Index |  |
| Upper Bound | 1.1 | Definition 1.1.2 | Index |  |
| Bounded Below | 1.1 | Definition 1.1.2 | Index |  |
| Lower Bound | 1.1 | Definition 1.1.2 | Index |  |
| Least Upper Bound | 1.1 | Definition 1.1.2 | Index | Index entry "supremum" is the same item |
| Greatest Lower Bound | 1.1 | Definition 1.1.2 | Index | Index entry "infimum" is the same item |
| Bounded Set | 1.1 | Definition 1.1.2 | Index |  |
| Least-Upper-Bound Property | 1.1 | Definition 1.1.3 | Index | Index entries "completeness property" and "Dedekind completeness property" are other names for it (section 1.1) |
| Field | 1.1 | Definition 1.1.5 | Index |  |
| Commutativity of Addition | 1.1 | Definition 1.1.5 | emphasized in the text (not in the Index) |  |
| Associativity of Addition | 1.1 | Definition 1.1.5 | emphasized in the text (not in the Index) |  |
| Commutativity of Multiplication | 1.1 | Definition 1.1.5 | emphasized in the text (not in the Index) |  |
| Associativity of Multiplication | 1.1 | Definition 1.1.5 | emphasized in the text (not in the Index) |  |
| Distributive Law | 1.1 | Definition 1.1.5 | emphasized in the text (not in the Index) |  |
| Ordered Field | 1.1 | Definition 1.1.7 | Index |  |
| Positive | 1.1 | Definition 1.1.7 | Index |  |
| Negative | 1.1 | Definition 1.1.7 | Index |  |
| Nonnegative | 1.1 | Definition 1.1.7 | Index |  |
| Nonpositive | 1.1 | Definition 1.1.7 | Index |  |
| Complex Numbers | 1.1 | Example 1.1.10 | Index | named in an example: $\mathbb{C}$ is a field but not an ordered field |
| Irrational | 1.2 | section 1.2 | Index |  |
| Archimedean Property | 1.2 | Theorem 1.2.4 | Index |  |
| Density of Rational Numbers | 1.2 | Theorem 1.2.4 | Index |  |
| Extended Real Numbers | 1.2 | section 1.2 | Index |  |
| Maximum | 1.2 | section 1.2 | Index |  |
| Minimum | 1.2 | section 1.2 | Index |  |
| Arithmetic-Geometric Mean Inequality | 1.2 | Exercise 1.2.7 | Index | named in an exercise |
| Bernoulli’s Inequality | 1.2 | Exercise 1.2.13 | Index | named in an exercise |
| Dedekind Cut | 1.2 | Exercise 1.2.15 | Index | named in an exercise |
| Absolute Value | 1.3 | section 1.3 | Index |  |
| Triangle Inequality | 1.3 | Proposition 1.3.2 | Index | titled Triangle Inequality |
| Reverse Triangle Inequality | 1.3 | Corollary 1.3.3 | Index |  |
| Bounded Function | 1.3 | Definition 1.3.6 | Index |  |
| Interval | 1.4 | section 1.4 | Index |  |
| Closed Interval | 1.4 | section 1.4 | Index |  |
| Open Interval | 1.4 | section 1.4 | Index |  |
| Half-Open Interval | 1.4 | section 1.4 | Index |  |
| Bounded Interval | 1.4 | section 1.4 | Index |  |
| Unbounded Interval | 1.4 | section 1.4 | Index |  |
| Unbounded Closed Intervals | 1.4 | section 1.4 | Index |  |
| Unbounded Open Intervals | 1.4 | section 1.4 | Index |  |
| Cantor’s Theorem | 1.4 | Theorem 1.4.2 | Index | titled Cantor; the Index entry also links Theorem 0.3.34, a different theorem with the same name |
| Algebraic Number | 1.4 | Exercise 1.4.9 | Index | named in an exercise; Index entry "algebraic number" |
| Decimal Representation | 1.5 | section 1.5 | Index |  |
| Decimal Digit | 1.5 | section 1.5 | Index | Index entry "digit" is the same sentence |
| Cantor Diagonalization | 1.5 | section 1.5 | Index | Index entry "diagonalization" is the same sentence |


Left out:

- Untitled propositions, theorems and corollaries (no name): 1.1.8, 1.1.9, 1.1.11, 1.2.1, 1.2.2, 1.2.5 to 1.2.8, 1.3.1, 1.3.4, 1.3.7, 1.4.1, 1.5.1, 1.5.3.
- Definition 1.2.9 (sup and inf of an empty or unbounded set): it names no new term.
- Theorem 1.5.2, titled Cantor like 1.4.2; the Index lists only 1.4.2.
- Index entry "axiom": its first link is section 0.3, so it is in chapter 0.
- Example words: the dictionary words of the lexicographic example.
- Emphasis that is not a name: the "Note: ... lectures" lines, (Hard), (Easy), (Challenging), stressed statements.

## Chapter 2 Sequences and Series (done 2026-10-30)

| Term | Section | Where the book defines it | Taken from | Note |
|---|---|---|---|---|
| Sequence | 2.1 | Definition 2.1.1 | Index |  |
| Bounded Sequence | 2.1 | Definition 2.1.1 | Index | Index entries "bounded above, sequence" and "bounded below, sequence" link the same box ("We similarly define the words bounded below and bounded above.") |
| Range of a Sequence | 2.1 | section 2.1 | Index |  |
| Constant Sequence | 2.1 | section 2.1 | Index |  |
| Convergent Sequence | 2.1 | Definition 2.1.2 | Index | Index entry "convergent, sequence"; the box goes on: "A sequence that converges is said to be convergent." |
| Limit | 2.1 | Definition 2.1.2 | emphasized in the text (not in the Index) |  |
| Divergent Sequence | 2.1 | Definition 2.1.2 | Index | Index entry "divergent, sequence" |
| Monotone Increasing Sequence | 2.1 | Definition 2.1.9 | Index |  |
| Monotone Decreasing Sequence | 2.1 | Definition 2.1.9 | Index |  |
| Monotone Sequence | 2.1 | Definition 2.1.9 | Index | Index entry "monotonic sequence" is the same box |
| Monotone Convergence Theorem | 2.1 | Theorem 2.1.10 | Index |  |
| Tail of a Sequence | 2.1 | Definition 2.1.14 | Index |  |
| Subsequence | 2.1 | Definition 2.1.16 | Index |  |
| Squeeze Lemma | 2.2 | Lemma 2.2.1 | Index |  |
| Newton’s Method | 2.2 | section 2.2 | emphasized in the text (not in the Index) |  |
| Ratio Test for Sequences | 2.2 | Lemma 2.2.12 | Index |  |
| Limit Superior | 2.3 | Definition 2.3.1 | Index | Index entry "limsup" is the same; both link the sentence before the box and Definition 2.3.12 (unbounded sequences) |
| Limit Inferior | 2.3 | Definition 2.3.1 | Index | Index entry "liminf" is the same |
| Bolzano–Weierstrass Theorem | 2.3 | Theorem 2.3.8 | Index | titled Bolzano–Weierstrass |
| Diverges to Infinity | 2.3 | Definition 2.3.9 | Index | Index entries "infinite limit, of a sequence" and "limit, infinite" are the same box; a footnote adds "converges to infinity" |
| Diverges to Minus Infinity | 2.3 | Definition 2.3.9 | Index |  |
| Cluster Point | 2.3 | Exercise 2.3.9 | Index | named in an exercise; the Index also links Definitions in chapters 3 and 7 |
| Cauchy Sequence | 2.4 | Definition 2.4.1 | Index |  |
| Cauchy-Complete | 2.4 | Remark 2.4.6 | Index | Index entry "complete" is the same sentence |
| Series | 2.5 | Definition 2.5.1 | Index |  |
| Convergent Series | 2.5 | Definition 2.5.1 | Index | Index entry "convergent, series" |
| Partial Sums | 2.5 | Definition 2.5.1 | Index |  |
| Divergent Series | 2.5 | Definition 2.5.1 | Index | Index entry "divergent, series" |
| Geometric Series | 2.5 | Proposition 2.5.5 | Index |  |
| Tail of a Series | 2.5 | section 2.5 | Index |  |
| Cauchy Series | 2.5 | Definition 2.5.7 | Index |  |
| Harmonic Series | 2.5 | Example 2.5.11 | Index |  |
| Linearity of Series | 2.5 | Proposition 2.5.12 | Index |  |
| Absolute Convergence | 2.5 | Definition 2.5.14 | Index | Index entry "converges absolutely" is the same |
| Conditional Convergence | 2.5 | Definition 2.5.14 | Index | Index entry "converges conditionally" is the same |
| Comparison Test | 2.5 | Proposition 2.5.16 | Index | titled Comparison test; Index entry "comparison test for series" |
| p-Series | 2.5 | Proposition 2.5.17 | Index | titled p-series or the p-test; Index entry "p-test" is the same box |
| Ratio Test | 2.5 | Proposition 2.5.19 | Index | titled Ratio test; Index entry "ratio test for series" |
| Limit Comparison Test | 2.5 | Exercise 2.5.11 | Index | named in an exercise |
| Abel’s Theorem | 2.5 | Exercise 2.5.17 | Index | named in an exercise |
| Cauchy Condensation Principle | 2.5 | Exercise 2.5.15 | Index | named in an exercise |
| Root Test | 2.6 | Proposition 2.6.1 | Index | titled Root test; the Index links the sentence before it |
| Alternating Series | 2.6 | Proposition 2.6.2 | titled result (not in the Index) | titled Alternating series |
| Rearrangement of a Series | 2.6 | section 2.6 | Index |  |
| Mertens’ Theorem | 2.6 | Theorem 2.6.5 | Index |  |
| Cauchy Product | 2.6 | section 2.6 | Index |  |
| Power Series | 2.6 | section 2.6 | Index |  |
| Convergent Power Series | 2.6 | section 2.6 | Index | Index entry "convergent, power series" |
| Divergent Power Series | 2.6 | section 2.6 | Index | Index entry "divergent, power series" |
| Radius of Convergence | 2.6 | section 2.6 | Index | $\rho$ is the number of Proposition 2.6.10: the series converges absolutely on $(x_0-\rho,x_0+\rho)$ and diverges outside it |
| Rational Functions | 2.6 | section 2.6 | Index |  |
| Cesàro Summability | 2.6 | section 2.6 | Index |  |
| Tonelli for Sums | 2.6 | Exercise 2.6.15 | Index | named in an exercise titled Tonelli/Fubini for sums; i) $\sum_{i=1}^\infty x_{\sigma(i)}$ for a bijection $\sigma \colon \mathbb{N} \to \mathbb{N}^2$, ii) and iii) the two iterated sums |
| Fubini for Sums | 2.6 | Exercise 2.6.15 | Index | named in an exercise titled Tonelli/Fubini for sums |

Left out:

- Untitled propositions, lemmas, theorems and corollaries: 2.1.6, 2.1.7, 2.1.13, 2.1.15, 2.1.17, 2.2.3 to 2.2.7, 2.2.10, 2.2.11, 2.3.2, 2.3.4 to 2.3.7, 2.3.10, 2.3.13, 2.4.4, 2.4.5, 2.5.6, 2.5.8, 2.5.9, 2.5.13, 2.5.15, 2.6.3, 2.6.10 to 2.6.12; Remarks 2.5.2 and 2.5.3.
- Emphasized words named only in exercises: peak (Exercise 2.3.10).
- Emphasis that is not a name: stressed words (the, any, prove), stressed statements, (Tricky), (Challenging), (Alternate proof of Bolzano–Weierstrass).

## Chapter 3 Continuous Functions (done 2026-10-30)

| Term | Section | Where the book defines it | Taken from | Note |
|---|---|---|---|---|
| Limit of a Function | 3.1 | Definition 3.1.3 | Index | Index entries "limit, of a function" and "converges, function"; the box goes on: "We say L is a limit of f(x) as x goes to c" |
| Diverges | 3.1 | Definition 3.1.3 | Index |  |
| Restriction | 3.1 | Definition 3.1.14 | Index |  |
| One-Sided Limit | 3.1 | Definition 3.1.16 | Index | the Index links the sentence before the box; the box defines the limit from the left the same way |
| Continuous at c | 3.2 | Definition 3.2.1 | Index |  |
| Continuous Function | 3.2 | Definition 3.2.1 | Index | Index entry "function, continuous" |
| Continuous on A | 3.2 | section 3.2 | emphasized in the text (not in the Index) |  |
| Polynomial | 3.2 | Proposition 3.2.4 | Index |  |
| Discontinuity | 3.2 | section 3.2 | Index | Index entry "discontinuous" is the same sentence |
| Dirichlet Function | 3.2 | Example 3.2.11 | Index |  |
| Thomae Function | 3.2 | section 3.2 | Index | Index entry "popcorn function" is the same sentence |
| Removable Discontinuity | 3.2 | Example 3.2.13 | Index | named in an example; $g(x) := 0$ if $x \neq 0$ and $g(0) := 1$ |
| Convex | 3.2 | Exercise 3.2.19 | Index | named in an exercise; the Index also links two later places |
| Absolute Minimum | 3.3 | section 3.3 | Index | Index entries "achieves absolute minimum" and "minimum, absolute" are the same paragraph |
| Absolute Maximum | 3.3 | section 3.3 | Index | Index entries "achieves absolute maximum" and "maximum, absolute" are the same paragraph |
| Extreme Value Theorem | 3.3 | Theorem 3.3.2 | Index | titled Minimum-maximum theorem / Extreme value theorem; Index entries "minimum-maximum theorem" and "maximum-minimum theorem" are the same box |
| Bolzano’s Intermediate Value Theorem | 3.3 | Theorem 3.3.8 | Index | Index entries "intermediate value theorem" and "Bolzano’s theorem" are the same box |
| Bisection Method | 3.3 | section 3.3 | Index |  |
| Monic Polynomial | 3.3 | Proposition 3.3.10, proof | Index | the second sentence is a footnote; the Index links the subsection |
| Uniformly Continuous | 3.4 | Definition 3.4.1 | Index |  |
| Removable Singularity | 3.4 | section 3.4 | Index |  |
| Lipschitz Continuous | 3.4 | Definition 3.4.7 | Index | Index entry "function, Lipschitz" |
| Secant Line | 3.4 | section 3.4 | Index |  |
| Limit of a Function at Infinity | 3.5 | Definition 3.5.1 | Index | Index entry "limit, of a function at infinity"; the box first defines $\infty$ as a cluster point of $S$ (Index "cluster point", third link) |
| Infinite Limit of a Function | 3.5 | Definition 3.5.6 | Index | Index entry "infinite limit, of a function"; "diverges to infinity" (first link 2.3) and "converges to infinity" (the sentence after the box) name it too |
| Increasing | 3.6 | Definition 3.6.1 | Index |  |
| Strictly Increasing | 3.6 | Definition 3.6.1 | Index |  |
| Decreasing | 3.6 | Definition 3.6.1 | Index |  |
| Strictly Decreasing | 3.6 | Definition 3.6.1 | Index |  |
| Monotone Function | 3.6 | Definition 3.6.1 | Index |  |
| Strictly Monotone Function | 3.6 | Definition 3.6.1 | Index |  |
| Nondecreasing | 3.6 | section 3.6 | Index |  |
| Nonincreasing | 3.6 | section 3.6 | Index |  |

Left out:

- Index entries already placed at their first link: cluster point (2.3; Definition 3.1.1 restates it formally), bounded function (1.3), diverges to infinity (2.3).
- Untitled propositions, lemmas, theorems and corollaries: 3.1.2, 3.1.4, 3.1.7, 3.1.9 to 3.1.13, 3.1.15, 3.1.17, 3.2.2, 3.2.5, 3.2.7, 3.2.9, 3.3.1, 3.3.7, 3.3.10, 3.3.13, 3.4.4 to 3.4.6, 3.4.8, 3.5.2, 3.5.5, 3.5.8, 3.6.2 to 3.6.4, 3.6.6.
- Emphasis that is not a name: stressed statements, the exercise label (Bisection method), (Tricky), (Challenging).

## Chapter 4 The Derivative (done 2026-10-30)

| Term | Section | Where the book defines it | Taken from | Note |
|---|---|---|---|---|
| Differentiable | 4.1 | Definition 4.1.1 | Index | Index entry "function, differentiable"; the box goes on: "If f is differentiable at all c ∈ I, then we simply say that f is differentiable" |
| Derivative | 4.1 | Definition 4.1.1 | Index |  |
| Difference Quotient | 4.1 | Definition 4.1.1 | Index |  |
| Linearity of the Derivative | 4.1 | Proposition 4.1.7 | Index | titled Linearity |
| Product Rule | 4.1 | Proposition 4.1.8 | Index | titled Product rule; Index entry "Leibniz rule" is the sentence before it ("the product rule or the Leibniz rule") |
| Quotient Rule | 4.1 | Proposition 4.1.9 | Index | titled Quotient rule |
| Chain Rule | 4.1 | Proposition 4.1.10 | Index | titled Chain rule |
| L’Hôpital’s Rule | 4.1 | Exercise 4.1.15 | Index | named in an exercise; Index entry "L’Hospital’s rule" is the same, and both also link Exercise 4.2.9 |
| Relative Maximum | 4.2 | Definition 4.2.1 | Index | Index entry "maximum, relative" |
| Relative Minimum | 4.2 | Definition 4.2.1 | Index | Index entry "minimum, relative" |
| Critical Point | 4.2 | section 4.2 | Index |  |
| Rolle’s Theorem | 4.2 | Theorem 4.2.3 | Index | titled Rolle |
| Mean Value Theorem | 4.2 | Theorem 4.2.4 | Index |  |
| Cauchy’s Mean Value Theorem | 4.2 | Theorem 4.2.5 | Index |  |
| First Derivative Test | 4.2 | Proposition 4.2.9 | Index | the Index links the sentence before it ("sometimes called the first derivative test") |
| Continuously Differentiable | 4.2 | section 4.2 | Index | Index entry "differentiable, continuously" |
| Darboux’s Theorem | 4.2 | Theorem 4.2.11 | Index | titled Darboux |
| First Derivative | 4.3 | section 4.3 | Index |  |
| Second Derivative | 4.3 | section 4.3 | Index |  |
| nth Derivative | 4.3 | section 4.3 | Index |  |
| n Times Differentiable | 4.3 | section 4.3 | Index | Index entry "differentiable, n times" is the same sentence |
| Taylor Polynomial | 4.3 | Definition 4.3.1 | Index | Index entry "n th order Taylor polynomial" is the same box; the book also writes the sum out term by term |
| Taylor’s Theorem | 4.3 | Theorem 4.3.2 | Index | titled Taylor |
| Remainder Term | 4.3 | section 4.3 | Index | Index entry "remainder term in Taylor’s formula" |
| Lagrange Form | 4.3 | section 4.3 | Index | "this form" is $\frac{f^{(n+1)}(c)}{(n+1)!}{(x-x_0)}^{n+1}$ of the sentence before |
| Infinitely Differentiable | 4.3 | section 4.3 | Index | Index entry "differentiable, infinitely" |
| Taylor Series | 4.3 | section 4.3 | Index |  |
| Analytic Function | 4.3 | section 4.3 | Index |  |
| Strict Relative Minimum | 4.3 | section 4.3 | Index | Index entry "minimum, strict relative" |
| Strict Relative Maximum | 4.3 | section 4.3 | Index | Index entry "maximum, strict relative" |
| Second Derivative Test | 4.3 | Proposition 4.3.3 | Index | titled Second derivative test |
| nth Derivative Test | 4.3 | Exercise 4.3.10 | Index | named in an exercise |
| Inverse Function Theorem | 4.4 | Theorem 4.4.2 | Index |  |

Left out:

- Index entries already placed at their first link: secant line (3.4), increasing, decreasing, strictly increasing, strictly decreasing (3.6; 4.2 links them again).
- Untitled propositions, lemmas and corollaries: 4.1.6, 4.2.2, 4.2.6 to 4.2.8, 4.2.10, 4.4.1, 4.4.3.
- Emphasis that is not a name: stressed words (any, not), a stressed statement, (requires Section 4.3).

## Chapter 5 The Riemann Integral (done 2026-10-30)

| Term | Section | Where the book defines it | Taken from | Note |
|---|---|---|---|---|
| Integral | 5.1 | section 5.1 | emphasized in the text (not in the Index) |  |
| Antiderivative | 5.1 | section 5.1 | emphasized in the text (not in the Index) |  |
| Partition | 5.1 | Definition 5.1.1 | Index |  |
| Lower Darboux Sum | 5.1 | Definition 5.1.1 | Index | Index entry "Darboux sum" is the same box; the box defines $m_i$, $M_i$, $L(P,f)$, $U(P,f)$ together, with $\Delta x_i := x_i - x_{i-1}$ |
| Upper Darboux Sum | 5.1 | Definition 5.1.1 | Index |  |
| Lower Darboux Integral | 5.1 | Definition 5.1.3 | Index | Index entry "Darboux integral" is the same box |
| Upper Darboux Integral | 5.1 | Definition 5.1.3 | Index |  |
| Refinement of a Partition | 5.1 | Definition 5.1.6 | Index |  |
| Riemann Integrable | 5.1 | Definition 5.1.9 | Index | the set of Riemann integrable functions on $[a,b]$ is denoted by $\mathcal{R}\bigl([a,b]\bigr)$ |
| Riemann Integral | 5.1 | Definition 5.1.9 | Index |  |
| Additive Property of the Integral | 5.2 | section 5.2 | Index |  |
| Linearity of the Integral | 5.2 | Proposition 5.2.4 | Index | titled Linearity |
| Monotonicity of the Integral | 5.2 | Proposition 5.2.6 | Index | titled Monotonicity |
| Finitely Many Discontinuities | 5.2 | section 5.2 | Index |  |
| Mean Value Theorem for Integrals | 5.2 | Exercise 5.2.4 | Index | named in an exercise |
| Elementary Step Function | 5.2 | Exercises 5.2 | Index | named in the exercises, before Exercise 5.2.12 |
| Step Function | 5.2 | Exercises 5.2 | Index | named in the exercises, before Exercise 5.2.13 |
| Fundamental Theorem of Calculus | 5.3 | section 5.3 | Index | the theorem is stated in two forms, Theorems 5.3.1 and 5.3.3 (untitled) |
| Change of Variables Theorem | 5.3 | Theorem 5.3.5 | Index | titled Change of variables; Index entry "u-substitution" is the sentence before it ("the change of variables theorem, you may have called it u-substitution") |
| Integration by Parts | 5.3 | Exercise 5.3.5 | Index | named in an exercise |
| Odd Function | 5.3 | Exercise 5.3.10 | Index | named in an exercise |
| Even Function | 5.3 | Exercise 5.3.10 | Index | named in an exercise |
| Logarithm | 5.4 | section 5.4 | Index | Index entry "natural logarithm" is the same sentence; the properties are those of Proposition 5.4.1 |
| Exponential Function | 5.4 | section 5.4 | Index | Index entry "exponential"; $E$ is the function of Proposition 5.4.2 |
| Euler’s Number | 5.4 | section 5.4 | Index | Index entry "base of the natural logarithm" is the same sentence |
| Euler–Mascheroni Constant | 5.4 | Exercise 5.4.6 | Index | named in an exercise |
| Improper Integrals | 5.5 | section 5.5 | Index | "such intervals or functions": the real line, $[a,\infty)$, $(-\infty,b]$, and unbounded functions on $(a,b)$ |
| Convergent Improper Integral | 5.5 | Definition 5.5.1 | Index | Index entry "convergent, improper integral"; the box first defines $\int_a^b f := \lim_{c \to b^-} \int_a^{c} f$ for $f \colon [a,b) \to \mathbb{R}$ |
| Divergent Improper Integral | 5.5 | Definition 5.5.1 | Index | Index entry "divergent, improper integral" |
| p-Test for Integrals | 5.5 | Proposition 5.5.2 | Index |  |
| Comparison Test for Improper Integrals | 5.5 | Proposition 5.5.5 | Index |  |
| Sinc Function | 5.5 | Example 5.5.12 | Index | a footnote gives the full name, sinus cardinalis |
| Integral Test for Series | 5.5 | Proposition 5.5.13 | Index | titled Integral test; the box goes on with $\int_k^\infty f \leq \sum_{n=k}^\infty f(n) \leq f(k)+ \int_k^\infty f$ |
| Laplace Transform | 5.5 | Exercise 5.5.6 | Index | named in an exercise |
| Fourier Sine and Cosine Transforms | 5.5 | Exercise 5.5.7 | Index | named in an exercise |
| Cauchy Principal Value | 5.5 | Exercises 5.5 | Index | named in the exercises, before Exercise 5.5.13 |
| Convolution | 5.5 | Exercise 5.5.14 | Index | named in an exercise |

Left out:

- Index entries already placed at their first link: convex (3.2), popcorn function and Thomae function (3.2), infinitely differentiable (4.3; 5.4 links an exercise on a non-analytic function).
- Untitled propositions, lemmas, theorems, corollaries and remarks: 5.1.2, 5.1.5, 5.1.7, 5.1.8, 5.1.10, 5.1.13, 5.1.15, 5.2.1 to 5.2.3, 5.2.5, 5.2.7 to 5.2.11, 5.3.1, 5.3.3, 5.3.4, 5.4.1 to 5.4.5, 5.5.3, 5.5.4, 5.5.10; Definition 5.5.8 (improper integrals with two improper endpoints) names no new term.
- Emphasized words named only in exercises: bounded variation, Riemann–Lebesgue Lemma (5.2), logarithm base b (5.4).
- Emphasis that is not a name: stressed words (the, not, decreasing, unbounded), (Sketch of proof), (uses Section 3.6), (requires Section 4.3), (More challenging).

## Chapter 6 Sequences of Functions (done 2026-10-30)

| Term | Section | Where the book defines it | Taken from | Note |
|---|---|---|---|---|
| Pointwise Convergence | 6.1 | Definition 6.1.1 | Index | Index entry "converges pointwise" is the same box |
| Uniform Convergence | 6.1 | Definition 6.1.6 | Index | Index entry "converges uniformly" is the same box |
| Uniform Norm | 6.1 | Definition 6.1.9 | Index | Index entries "sup norm" and "infinity norm" name the same norm in the paragraph after the box |
| Uniform Norm Convergence | 6.1 | section 6.1 | Index | Index entry "converges in uniform norm" is the same sentence |
| Uniformly Cauchy | 6.1 | Definition 6.1.12 | Index | Index entry "Cauchy in the uniform norm" is the same box |
| L1-Norm | 6.2 | Exercises 6.2 | Index | named in the exercises, before Exercise 6.2.8 |
| L1-Convergence | 6.2 | Exercises 6.2 | Index | named in the exercises, before Exercise 6.2.8; convergence of $f_n$ to $f$ in the $L^1$-norm |
| Joint Limit | 6.2 | Exercises 6.2 | Index | named in the exercises, before Exercise 6.2.13; a double sequence is a function from $\mathbb{N} \times \mathbb{N}$ to $\mathbb{R}$ |
| Uniform Convergence on Compact Subsets | 6.2 | Exercise 6.2.15 | Index | named in an exercise; Index entry "converges uniformly on compact subsets" is the same sentence |
| Dini’s Theorem | 6.2 | Exercise 6.2.10 | Index | named in an exercise |
| Differential Equation | 6.3 | section 6.3 | Index |  |
| First Order Ordinary Differential Equation | 6.3 | section 6.3 | Index | Index entry "ordinary differential equation" is the same sentence |
| Initial Condition | 6.3 | section 6.3 | Index |  |
| Slope Field | 6.3 | section 6.3 | Index |  |
| Continuous Function of Two Variables | 6.3 | Definition 6.3.1 | Index |  |
| Picard’s Theorem | 6.3 | Theorem 6.3.2 | Index | titled Picard’s theorem on existence and uniqueness; Index entry "existence and uniqueness theorem" is the same box; the book writes the conclusion as a display with "and" |
| Picard Iteration | 6.3 | Theorem 6.3.2, proof | Index | Index entries "Picard iteration" and "Picard iterate" link the subsection; (6.2) is the integral equation $f(x) = y_0 + \int_{x_0}^x F\bigl(t,f(t)\bigr)\,dt$ |
| Weak Solution | 6.3 | Remark 6.3.7 | Index | the two sentences are the first and the last of the remark; $f$ is the ramp function, a “solution” of $y' = H(x)$, $y(0) = 0$, with $H$ the Heaviside function |
| Linear First Order Differential Equation | 6.3 | Exercise 6.3.6 | Index | named in an exercise |

Left out:

- Index entries already placed at their first link: Dirichlet function (3.2).
- Untitled propositions, theorems and corollaries: 6.1.5, 6.1.7, 6.1.10, 6.1.13, 6.2.2, 6.2.4, 6.2.10 to 6.2.13.
- Emphasis that is not a name: pièce de résistance, (requires Section 2.6), (requires Section 2.6 and Section 4.3), (requires Section 5.5).

## Chapter 7 Metric Spaces (done 2026-10-30)

| Term | Section | Where the book defines it | Taken from | Note |
|---|---|---|---|---|
| Metric Space | 7.1 | Definition 7.1.1 | Index | the triangle inequality of a metric is the fourth item; the Index entry "triangle inequality" first links 1.3 |
| Metric | 7.1 | Definition 7.1.1 | Index | Index entry "distance function" is the same sentence |
| Nonnegativity of a Metric | 7.1 | Definition 7.1.1 | Index |  |
| Identity of Indiscernibles | 7.1 | Definition 7.1.1 | Index |  |
| Symmetry of a Metric | 7.1 | Definition 7.1.1 | Index |  |
| Standard Metric on ℝ | 7.1 | Example 7.1.2 | Index |  |
| Euclidean Space | 7.1 | section 7.1 | Index |  |
| Cauchy–Schwarz Inequality | 7.1 | Lemma 7.1.4 | Index | titled Cauchy–Schwarz inequality; Index entry "Cauchy–Bunyakovsky–Schwarz inequality" is the same box |
| Standard Metric on ℝⁿ | 7.1 | Example 7.1.5 | Index |  |
| Complex Modulus | 7.1 | Example 7.1.6 | Index | Index entry "modulus" is the same sentence |
| Complex Conjugate | 7.1 | Example 7.1.6 | Index |  |
| Discrete Metric | 7.1 | Example 7.1.7 | Index |  |
| Unit Sphere | 7.1 | Example 7.1.9 | Index | Index entry "sphere" is the same example |
| Great Circle Distance | 7.1 | Example 7.1.9 | Index |  |
| Subspace | 7.1 | Definition 7.1.11 | Index |  |
| Subspace Metric | 7.1 | section 7.1 | Index |  |
| Subspace Topology | 7.1 | section 7.1 | Index |  |
| Diameter | 7.1 | section 7.1 | Index | the first sentence is the second item of the list before (sec_metric-32), one of the conditions equivalent to boundedness |
| Subadditive | 7.1 | Exercise 7.1.5 | Index | named in an exercise |
| Hausdorff Metric | 7.1 | Exercise 7.1.8 | Index | named in an exercise |
| Pseudometric Space | 7.1 | Exercise 7.1.8 | Index | named in an exercise; property ii, identity of indiscernibles, may fail |
| Topology | 7.2 | section 7.2 | Index |  |
| Open Ball | 7.2 | Definition 7.2.1 | Index | Index entry "ball" is the same sentence |
| Closed Ball | 7.2 | Definition 7.2.1 | Index |  |
| Open Set | 7.2 | Definition 7.2.4 | Index |  |
| Closed Set | 7.2 | Definition 7.2.4 | Index |  |
| Open Neighborhood | 7.2 | Definition 7.2.4 | Index | Index entry "neighborhood" is the same sentence |
| Connected | 7.2 | Definition 7.2.13 | Index |  |
| Clopen | 7.2 | Definition 7.2.13 | Index |  |
| Disconnected | 7.2 | Definition 7.2.13 | Index |  |
| Closure | 7.2 | Definition 7.2.18 | Index |  |
| Interior | 7.2 | Definition 7.2.23 | Index |  |
| Boundary | 7.2 | Definition 7.2.23 | Index |  |
| Totally Separated | 7.2 | Exercise 7.2.5 | Index | named in an exercise; $\mathbb{Q}$ with the standard metric |
| Convergent Sequence in a Metric Space | 7.3 | Definition 7.3.2 | Index | Index entries "convergent, sequence in a metric space", "limit, of a sequence in a metric space" and "divergent, sequence in a metric space" are the same box |
| Dense | 7.3 | Exercise 7.3.7 | Index | named in an exercise |
| Compact | 7.4 | Definition 7.4.7 | Index |  |
| Open Cover | 7.4 | section 7.4 | Index |  |
| Subcover | 7.4 | section 7.4 | Index |  |
| Sequentially Compact | 7.4 | section 7.4 | Index |  |
| Lebesgue Covering Lemma | 7.4 | Lemma 7.4.10 | Index | Index entry "Lebesgue number" is the same box (the number $\delta$) |
| Heine–Borel Theorem | 7.4 | Theorem 7.4.14 | Index | titled Heine–Borel |
| Totally Bounded | 7.4 | Exercise 7.4.12 | Index | named in an exercise; $(X,d)$ is a complete metric space |
| Relatively Compact | 7.4 | Exercise 7.4.20 | Index | named in an exercise; the Index also links 10.3 |
| Continuous Function in a Metric Space | 7.5 | Definition 7.5.1 | Index | Index entry "continuous function, in a metric space"; "continuous at c" first links 3.2 |
| Zero Set | 7.5 | Example 7.5.9 | Index |  |
| Algebraic Geometry | 7.5 | Example 7.5.9 | Index |  |
| Uniformly Continuous in a Metric Space | 7.5 | Definition 7.5.10 | Index | Index entry "uniformly continuous, in a metric space" |
| Lipschitz Continuous in a Metric Space | 7.5 | Example 7.5.13 | Index | Index entries "Lipschitz continuous, in a metric space" and "function, Lipschitz" |
| Cluster Point in a Metric Space | 7.5 | Definition 7.5.14 | Index | Index entry "cluster point, in a metric space" |
| Limit of a Function in a Metric Space | 7.5 | Definition 7.5.15 | Index | Index entries "limit, of a function in a metric space", "converges, function in a metric space" and "diverges, function in a metric space" are the same box |
| Proper | 7.5 | Exercise 7.5.7 | Index | named in an exercise |
| Contraction | 7.6 | Definition 7.6.1 | Index |  |
| Fixed Point | 7.6 | Definition 7.6.1 | Index |  |
| Contraction Mapping Principle | 7.6 | Theorem 7.6.2 | Index | titled Contraction mapping principle or Banach fixed point theorem; Index entries "Banach fixed point theorem" and "fixed point theorem" are the same box |

Chapter 7 redefines many earlier terms for metric spaces. Where the Index gives the metric-space version its own subentry ("in a metric space"), it is a row here; where the Index entry is the same one whose first link is in an earlier chapter, the term stays there.

Left out:

- Index entries already placed at their first link: triangle inequality (1.3), bounded set (1.1), sequence, bounded sequence, subsequence (2.1), Bolzano–Weierstrass theorem (2.3), Cauchy sequence, Cauchy-complete, complete (2.4), continuous at c (3.2), absolute maximum, absolute minimum (3.3), Picard's theorem, existence and uniqueness theorem (6.3).
- Untitled propositions, lemmas, theorems, corollaries and remarks: 7.1.10, 7.2.6, 7.2.8 to 7.2.12, 7.2.14, 7.2.16, 7.2.19, 7.2.22, 7.2.26 to 7.2.28, 7.3.3 to 7.3.6, 7.3.8, 7.3.9, 7.3.11 to 7.3.13, 7.4.2, 7.4.4 to 7.4.6, 7.4.9, 7.4.11, 7.4.13, 7.4.16, 7.5.2, 7.5.5 to 7.5.8, 7.5.11, 7.5.12, 7.5.16, 7.5.17.
- Emphasis that is not a name: stressed statements (open in X, closed in X, S is disconnected, every open cover has a finite subcover, the hint of an exercise).

## Chapter 8 Several Variables and Partial Derivatives (done 2026-10-30)

| Term | Section | Where the book defines it | Taken from | Note |
|---|---|---|---|---|
| Vector | 8.1 | section 8.1 | Index | Definition 8.1.1 goes on: "Elements of a vector space are usually called vectors" |
| Column Vector | 8.1 | section 8.1 | Index |  |
| Scalars | 8.1 | section 8.1 | Index |  |
| Vector Space | 8.1 | Definition 8.1.1 | Index | Index entry "real vector space" is the same box; only the labels of the eight conditions are quoted here, each condition is an equation in the box |
| Vector Subspace | 8.1 | Definition 8.1.1 | Index | Index entry "subspace" first links 7.1 (a metric subspace) |
| Linear Combination | 8.1 | Definition 8.1.7 | Index |  |
| Span | 8.1 | Definition 8.1.7 | Index |  |
| Linearly Independent | 8.1 | Definition 8.1.12 | Index |  |
| Linearly Dependent | 8.1 | Definition 8.1.12 | Index |  |
| Basis | 8.1 | Definition 8.1.12 | Index |  |
| Dimension | 8.1 | Definition 8.1.12 | Index |  |
| Standard Basis | 8.1 | section 8.1 | Index |  |
| Linear Transformation | 8.1 | Definition 8.1.15 | Index | Index entries "linear", "linear operator", "operator, linear" and "transformation, linear" are the same box; the box adds: "If A : X → X is linear, then we say A is a linear operator on X" |
| Invertible Linear Transformation | 8.1 | Definition 8.1.15 | Index |  |
| Identity | 8.1 | Definition 8.1.15 | Index |  |
| Algebra | 8.1 | section 8.1 | Index | $L(X)$ is the set of linear operators on $X$ |
| Nullspace | 8.1 | section 8.1 | Index |  |
| Convex Combination | 8.1 | section 8.1 | Index | Index entry "convex" first links 3.2 (a convex function) |
| Convex Hull | 8.1 | section 8.1 | Index |  |
| Norm | 8.2 | Definition 8.2.1 | Index |  |
| Triangle Inequality for Norms | 8.2 | Definition 8.2.1 | Index | Index entry "triangle inequality, norms" |
| Normed Vector Space | 8.2 | Definition 8.2.1 | Index |  |
| Dot Product | 8.2 | section 8.2 | Index |  |
| Bilinear | 8.2 | section 8.2 | Index |  |
| Symmetric | 8.2 | section 8.2 | Index |  |
| Euclidean Norm | 8.2 | section 8.2 | Index |  |
| Operator Norm | 8.2 | Definition 8.2.3 | Index |  |
| General Linear Group | 8.2 | Proposition 8.2.6 | Index | the second sentence is a footnote |
| Matrix | 8.2 | section 8.2 | Index | $\{ x_1, \ldots, x_n \}$ and $\{ y_1, \ldots, y_m \}$ are bases of $X$ and $Y$, and $A \in L(X,Y)$ |
| Column | 8.2 | section 8.2 | Index |  |
| Change of Basis | 8.2 | section 8.2 | Index |  |
| Permutation | 8.2 | section 8.2 | Index |  |
| Even Permutation | 8.2 | section 8.2 | Index |  |
| Odd Permutation | 8.2 | section 8.2 | Index |  |
| Symmetric Group | 8.2 | section 8.2 | Index |  |
| Determinant | 8.2 | section 8.2 | Index |  |
| Commutative Diagram | 8.2 | section 8.2 | Index | a footnote to the diagram of a change of basis |
| Elementary Matrix | 8.2 | section 8.2 | Index | the paragraphs after define the second and third types |
| Upper Triangular Matrix | 8.2 | section 8.2 | Index |  |
| Diagonal Matrix | 8.2 | Exercise 8.2.10 | Index | named in an exercise |
| Eigenvalue | 8.2 | Exercises 8.2 | Index | named in the exercises, before Exercise 8.2.17 |
| Spectral Radius | 8.2 | Exercises 8.2 | Index | named in the exercises, before Exercise 8.2.17 |
| Partial Derivative | 8.3 | Definition 8.3.8 | Index |  |
| Gradient | 8.3 | section 8.3 | Index |  |
| Curve | 8.3 | section 8.3 | Index | Index entry "differentiable curve" is the same sentence |
| Tangent Vector | 8.3 | section 8.3 | Index |  |
| Directional Derivative | 8.3 | section 8.3 | Index |  |
| Jacobian Determinant | 8.3 | Definition 8.3.10 | Index | Index entry "Jacobian" is the same sentence |
| Jacobian Matrix | 8.3 | Definition 8.3.10 | Index | a footnote to the box; the matrix has entries $\frac{\partial f_k}{\partial x_j}(x)$ |
| Peano Surface | 8.3 | Exercise 8.3.11 | Index | named in an exercise: $(0,0)$ is a critical point and a relative maximum along every line, but not a relative maximum |
| Open Mapping | 8.5 | Corollary 8.5.2 | Index |  |
| Jacobian Conjecture | 8.5 | section 8.5 | Index |  |
| Implicit Function Theorem | 8.5 | Theorem 8.5.6 | Index | titled Implicit function theorem; the box goes on with $g'(p) = -{(A_y)}^{-1}A_x$ |
| Polar Coordinates | 8.5 | Exercise 8.5.8 | Index | named in an exercise (its title) |
| Partial Derivative of Order k | 8.6 | section 8.6 | Index | the sentence before: the $(k-1)$th partial derivative exists and is differentiable in the variable $x_{\ell_k}$ |
| k-Times Continuously Differentiable Function | 8.6 | Definition 8.6.1 | Index |  |

8.4 Continuity and the derivative has no terms: its one Index entry, continuously differentiable (Definition 8.4.5, the several-variable version), first links 4.2.

Left out:

- Index entries already placed at their first link: function and its other names map, mapping (0.3), convex (3.2), derivative, differentiable, chain rule (4.1), relative maximum, relative minimum, critical point, mean value theorem, continuously differentiable (4.2), inverse function theorem (4.4), Cauchy–Schwarz inequality, subspace (7.1).
- Untitled propositions, lemmas, corollaries and remarks: 8.1.6, 8.1.11, 8.1.13, 8.1.14, 8.1.16 to 8.1.20, 8.1.23, 8.1.25, 8.2.4, 8.2.5, 8.2.7 to 8.2.11, 8.3.2, 8.3.5, 8.3.6, 8.3.9, 8.4.1, 8.4.2, 8.4.4, 8.4.6, 8.4.7, 8.5.5, 8.5.8, 8.6.2.
- Emphasis that is not a name: vector space structure, row, column (a memory aid), a stressed statement.

## Chapter 9 One-dimensional Integrals in Several Variables (done 2026-10-30)

| Term | Section | Where the book defines it | Taken from | Note |
|---|---|---|---|---|
| Leibniz Integral Rule | 9.1 | Theorem 9.1.1 | Index | titled Leibniz integral rule |
| Smooth Path | 9.2 | Definition 9.2.1 | Index | Index entry "continuously differentiable path" is the same sentence |
| Piecewise Smooth Path | 9.2 | Definition 9.2.1 | Index | Index entry "piecewise continuously differentiable path" is the same sentence |
| Closed Path | 9.2 | Definition 9.2.1 | Index |  |
| Simple Path | 9.2 | Definition 9.2.1 | Index |  |
| Continuous Piecewise Smooth | 9.2 | section 9.2 | Index |  |
| Smooth Reparametrization | 9.2 | Definition 9.2.5 | Index | Index entry "reparametrization" is the same box |
| Piecewise Smooth Reparametrization | 9.2 | Definition 9.2.5 | Index |  |
| Preserve Orientation | 9.2 | Definition 9.2.5 | Index |  |
| Reverse Orientation | 9.2 | Definition 9.2.5 | Index |  |
| One-Form | 9.2 | Definition 9.2.7 | Index | Index entry "differential one-form" is the same box |
| Path Integral of a One-Form | 9.2 | Definition 9.2.9 | Definition box the Index misses, named by its subsection title | subsection 9.2.2; the book writes the sum out term by term first, and extends the definition to piecewise smooth paths by adding the pieces |
| Arc-Length Measure | 9.2 | section 9.2 | Index |  |
| Path Integral of a Function | 9.2 | Definition 9.2.14 | Definition box the Index misses, named by its subsection title | subsection 9.2.3 |
| Length of a Curve | 9.2 | Definition 9.2.17 | Index | Index entry "length" is the same box |
| Arc-Length Parametrization | 9.2 | section 9.2 | Index |  |
| Path Independent | 9.3 | section 9.3 | Index |  |
| Total Derivative | 9.3 | Definition 9.3.2 | Index |  |
| Path Connected | 9.3 | Definition 9.3.2 | Index |  |
| Antiderivative of a One-Form | 9.3 | section 9.3 | Index | Index entry "antiderivative" (its only link); the word for functions of one variable is in 5.1, emphasized there |
| Simply Connected | 9.3 | section 9.3 | Index |  |
| Star-Shaped Domain | 9.3 | Definition 9.3.5 | Index | the box adds: "If we say simply star-shaped, then U is star-shaped with respect to some p ∈ U" |
| Poincaré Lemma | 9.3 | Theorem 9.3.6 | Index | titled Poincaré lemma |
| Vector Field | 9.3 | Definition 9.3.8 | Index |  |
| Path Integral of a Vector Field | 9.3 | Definition 9.3.8 | Definition box the Index misses, named in the box |  |
| Potential | 9.3 | section 9.3 | Index |  |
| Conservative Vector Field | 9.3 | section 9.3 | Index |  |
| Winding Number | 9.3 | Exercise 9.3.10 | Index | named in an exercise (its closing note); $\int_{\gamma} \omega = 2 \pi \ell$ for a closed path $\gamma$ around the origin |

Added beyond the Index: the three path-integral definitions (Definitions 9.2.9, 9.2.14 and the second half of 9.3.8), which the Index does not list; the first two are named by the titles of their subsections (9.2.2 Path integral of a one-form, 9.2.3 Path integral of a function), the third in its box. Antiderivative appears twice: emphasized for functions in 5.1, and as the only Index link here, for one-forms.

Left out:

- Untitled propositions: 9.2.6, 9.2.10, 9.2.12, 9.2.15, 9.3.3, 9.3.4.

## Chapter 10 Multivariable Integral (done 2026-10-30)

| Term | Section | Where the book defines it | Taken from | Note |
|---|---|---|---|---|
| Closed Rectangle | 10.1 | Definition 10.1.1 | Index | Index entry "rectangle" is the same box |
| Open Rectangle | 10.1 | Definition 10.1.1 | Index |  |
| Volume of Rectangles | 10.1 | Definition 10.1.1 | Index | Index entry "volume, rectangles" is the same sentence |
| Subrectangle | 10.1 | Definition 10.1.1 | Index | $P_k = \{ x_{k,0},\ldots,x_{k,\ell_k} \}$ are the partitions of the sides that make up a partition of the rectangle |
| Integrable | 10.1 | Definition 10.1.7 | Index | "Riemann integrable" and "Riemann integral" first link 5.1 |
| Longest Side | 10.1 | section 10.1 | Index |  |
| Support | 10.1 | section 10.1 | Index |  |
| Compact Support | 10.1 | section 10.1 | Index |  |
| Fubini’s Theorem | 10.2 | Theorem 10.2.2 | Index | titled Fubini version A; the Index also links Theorem 10.2.3, Fubini version B, which integrates over $R$ first; $f_x(y) := f(x,y)$ |
| Outer Measure | 10.3 | Definition 10.3.1 | Index |  |
| Measure Zero | 10.3 | Definition 10.3.1 | Index | Index entry "null set" is the same sentence |
| Cantor Set | 10.3 | Example 10.3.8 | Index | an uncountable, compact, measure zero subset of $[0,1]$ containing no intervals |
| Cantor Function | 10.3 | Exercise 10.3.12 | Index | named in an exercise; Index entry "Devil’s staircase" is the same; $d_n$ are the ternary digits of $x$; the quote leaves out "and let $C_k$ be as in Example 10.3.8. Write $x$ in ternary representation." |
| Oscillation | 10.4 | section 10.4 | Index | $o(f,x,\delta)$, the oscillation on the $\delta$-ball, is $\sup f - \inf f$ over $B_D(x,\delta)$, "the length of the smallest interval that contains the image" |
| Riemann–Lebesgue Theorem | 10.4 | Theorem 10.4.3 | Index | titled Riemann–Lebesgue or Lebesgue–Vitali; Index entry "Lebesgue–Vitali theorem" is the same box |
| Almost Everywhere | 10.4 | Exercise 10.4.13 | Index | named in an exercise; the Index also links the definition in 10.5 |
| Characteristic Function | 10.5 | section 10.5 | Index | Index entry "indicator function" is the same sentence |
| Jordan Measurable | 10.5 | section 10.5 | Index |  |
| Volume | 10.5 | section 10.5 | Index | Index entry "volume, Jordan measurable set" is the same sentence |
| Riemann Integrable on S | 10.5 | Definition 10.5.4 | Index | Index entry "integrable on S" is the same box |
| Almost Every | 10.5 | section 10.5 | Index | Index entries "almost every" and "for almost every"; "almost everywhere" first links 10.4 |
| Bounded Domain with Piecewise Smooth Boundary | 10.6 | Definition 10.6.1 | Index | Index entry "piecewise smooth boundary" is the same box |
| Positively Oriented | 10.6 | Definition 10.6.2 | Index | $\gamma \colon [a,b] \to \mathbb{R}^2$ parametrizes $\partial U$ giving its orientation |
| Negatively Oriented | 10.6 | Definition 10.6.2 | Index |  |
| Green’s Theorem | 10.6 | Theorem 10.6.4 | Index | titled Green |
| Type I Domain | 10.6 | section 10.6 | Index |  |
| Type II Domain | 10.6 | section 10.6 | Index |  |
| Type III Domain | 10.6 | section 10.6 | Index |  |
| Vortex Vector Field | 10.6 | Example 10.6.5 | Index | "vector field" first links 9.3 |
| Laplace Equation | 10.6 | Example 10.6.6 | Index |  |
| Mean Value Property | 10.6 | Example 10.6.6 | Index | for every disc $\overline{D_r} = C(p,r) \subset U$ around $p = (x_0,y_0)$ |
| Maximum Principle for Harmonic Functions | 10.6 | Exercise 10.6.6 | Index | named in an exercise; Index entry "maximum principle, harmonic functions" |

10.7 Change of variables has no terms: its theorem (10.7.2) is untitled, and the Index entry "change of variables theorem" first links 5.3.

Left out:

- Index entries already placed at their first link: partition, refinement of a partition, lower and upper Darboux sum and integral, Darboux sum, Darboux integral, Riemann integrable, Riemann integral (5.1), linearity of the integral, monotonicity of the integral (5.2), relatively compact (7.4; 10.3 links an exercise item), vector field (9.3).
- Untitled propositions, lemmas, theorems and corollaries: 10.1.2, 10.1.5, 10.1.6, 10.1.8, 10.1.12 to 10.1.15, 10.1.19, 10.3.2, 10.3.4, 10.3.7, 10.3.9, 10.3.10, 10.4.1, 10.4.2, 10.4.4, 10.5.1 to 10.5.3, 10.5.5 to 10.5.9, 10.6.3, 10.7.1, 10.7.2.
- Emphasis that is not a name: stressed words (the), (Proof of Green's theorem for U of type III), stressed statements in 10.7.

## Chapter 11 Functions as Limits (done 2026-10-30)

| Term | Section | Where the book defines it | Taken from | Note |
|---|---|---|---|---|
| Complex Number | 11.1 | section 11.1 | Index | Index entry "complex number"; "complex numbers" (1.1) names the set |
| Real Axis | 11.1 | section 11.1 | Index |  |
| Imaginary Axis | 11.1 | section 11.1 | Index |  |
| Complex Plane | 11.1 | section 11.1 | Index |  |
| Real Part | 11.1 | Definition 11.1.1 | Index | "complex conjugate" and "modulus" in the same box first link 7.1 |
| Imaginary Part | 11.1 | Definition 11.1.1 | Index |  |
| Triangle Inequality for Complex Numbers | 11.1 | section 11.1 | Index | Index entry "triangle inequality, complex numbers" |
| Convergent Complex Series | 11.1 | section 11.1 | Index | Index entry "converges, complex series" |
| Absolute Convergence of Complex Series | 11.1 | section 11.1 | Index | Index entry "converges absolutely, complex series" |
| Cauchy Complex Series | 11.1 | section 11.1 | Index | Index entry "Cauchy, complex series" |
| Riemann Integrable Complex-Valued Function | 11.1 | section 11.1 | Index | Index entry "Riemann integrable, complex-valued function" |
| Derivative of a Complex-Valued Function | 11.1 | section 11.1 | Index | Index entry "derivative, complex-valued function"; the first and the third sentence of the paragraph |
| Pointwise Convergence of a Complex Series | 11.2 | section 11.2 | Index | Index entries "converges pointwise, complex series" and "pointwise convergence, complex series" |
| Supremum Norm | 11.2 | section 11.2 | Index | "uniform norm" first links 6.1 |
| Weierstrass M-Test | 11.2 | Theorem 11.2.4 | Index | titled Weierstrass M-test; the Index also links the sentence before it |
| Weierstrass Function | 11.2 | Example 11.2.15 | Index | named in an example |
| Convergent Complex Power Series | 11.3 | section 11.3 | Index | Index entry "converges, power series"; "convergent, power series" (real) is in 2.6 |
| Analytic | 11.3 | section 11.3 | Index | Index entry "analytic"; "analytic function" (real, via Taylor series) is in 4.3 |
| Real-Analytic | 11.3 | section 11.3 | Index |  |
| Taylor’s Theorem for Real-Analytic Functions | 11.3 | Theorem 11.3.6 | Index | Index entry "Taylor’s theorem, real-analytic"; "Fubini for sums" (Theorem 11.3.5) first links 2.6 |
| Identity Theorem | 11.3 | Theorem 11.3.9 | Index | titled Identity theorem |
| Law of Exponents | 11.4 | Proposition 11.4.1 | Index | titled Law of exponents |
| Cosine | 11.4 | section 11.4 | Index | the book writes both in one display joined by "and" |
| Sine | 11.4 | section 11.4 | Index |  |
| Euler’s Formula | 11.4 | Proposition 11.4.2 | Index | the first item of the proposition |
| Unimodular | 11.4 | section 11.4 | Index | the Index links the subsection 11.4.2; $\lvert e^{ix} \rvert = 1$ |
| Hyperbolic Sine | 11.4 | Exercises 11.4 | Index | named in the exercises, before Exercise 11.4.9 |
| Hyperbolic Cosine | 11.4 | Exercises 11.4 | Index | named in the exercises, before Exercise 11.4.9 |
| Minimum Modulus Principle | 11.5 | section 11.5 | Index | the lemma is Lemma 11.5.1 |
| Maximum Modulus Principle | 11.5 | Theorem 11.5.2 | Index | titled Maximum modulus principle; Index entry "maximum principle, analytic functions" is the same box |
| Fundamental Theorem of Algebra | 11.5 | Theorem 11.5.5 | Index | titled Fundamental theorem of algebra |
| Rational Function | 11.5 | Exercises 11.5 | Index | named in the exercises, before Exercise 11.5.4; "rational functions" (2.6) is a separate Index entry |
| Zero of a Function | 11.5 | Exercises 11.5 | Index | named in the exercises, before Exercise 11.5.4 |
| Singularity | 11.5 | Exercises 11.5 | Index | named in the exercises, before Exercise 11.5.4 |
| Isolated Singularity | 11.5 | Exercises 11.5 | Index | named in the exercises, before Exercise 11.5.4; "removable singularity" first links 3.4, here: "An isolated singularity is called removable if the limit exists" |
| Pole | 11.5 | Exercises 11.5 | Index | named in the exercises, before Exercise 11.5.4 |
| Pointwise Bounded | 11.6 | Definition 11.6.1 | Index |  |
| Uniformly Bounded | 11.6 | Definition 11.6.1 | Index |  |
| Uniformly Equicontinuous | 11.6 | Definition 11.6.6 | Index |  |
| Equicontinuous | 11.6 | section 11.6 | Index |  |
| Arzelà–Ascoli Theorem | 11.6 | Theorem 11.6.9 | Index | titled Arzelà–Ascoli |
| Compact Operator | 11.6 | section 11.6 | Index | $T\bigl(f\bigr)(x) := \int_0^1 f(t) \, k(x,t)\,dt$ for a continuous $k$; "relatively compact" first links 7.4 |
| Kronecker Density Theorem | 11.6 | Exercise 11.6.10 | Index | named in an exercise (its hint) |
| Peano Existence Theorem | 11.6 | Exercise 11.6.11 | Index | named in an exercise; the book writes the conclusion as a display with "and" |
| Approximate Delta Function | 11.7 | section 11.7 | Index | the Index links the subsection 11.7.1 and a paragraph of 11.8 |
| Weierstrass Approximation Theorem | 11.7 | Theorem 11.7.1 | Index | titled Weierstrass approximation theorem |
| Complex Algebra | 11.7 | Definition 11.7.5 | Index | "algebra" first links 8.1 |
| Real Algebra | 11.7 | Definition 11.7.5 | Index |  |
| Separates Points | 11.7 | Definition 11.7.7 | Index |  |
| Vanishes at No Point | 11.7 | Definition 11.7.7 | Index |  |
| Stone–Weierstrass Theorem, Real Version | 11.7 | Theorem 11.7.12 | Index | titled Stone–Weierstrass, real version |
| Generate an Algebra | 11.7 | section 11.7 | Index | "That is, we consider all real polynomials without constant term of such functions." |
| Self-Adjoint | 11.7 | Definition 11.7.15 | Index |  |
| Stone–Weierstrass Theorem, Complex Version | 11.7 | Theorem 11.7.16 | Index | titled Stone–Weierstrass, complex version |
| Harmonic Polynomials | 11.7 | Exercise 11.7.7 | Index | named in an exercise; $S^1$ is the unit circle $\lvert z \rvert=1$ |
| Trigonometric Polynomial | 11.8 | section 11.8 | Index |  |
| Fourier Series | 11.8 | section 11.8 | Index |  |
| Fourier Coefficients | 11.8 | section 11.8 | Index |  |
| Symmetric Partial Sums | 11.8 | section 11.8 | Index |  |
| Inner Product | 11.8 | section 11.8 | Index |  |
| Orthonormal System | 11.8 | Definition 11.8.7 | Index |  |
| Orthogonal System | 11.8 | Definition 11.8.7 | Index |  |
| Bessel’s Inequality | 11.8 | Theorem 11.8.9 | Index | titled Bessel’s inequality; the Index links the sentence before it |
| Dirichlet Kernel | 11.8 | section 11.8 | Index |  |
| Piecewise Smooth | 11.8 | section 11.8 | Index | Index entry "piecewise smooth"; "continuous piecewise smooth" first links 9.2 |
| Parseval’s Theorem | 11.8 | Theorem 11.8.13 | Index | titled Parseval; the book also writes each norm and inner product as its integral over $[-\pi,\pi]$ divided by $2\pi$ |

Chapter 11 redoes earlier notions for complex values. Where the Index gives the complex version its own subentry ("complex series", "complex-valued function", "complex numbers"), it is a row here.

Left out:

- Index entries already placed at their first link: algebra (8.1), complex conjugate, modulus (7.1), continuous piecewise smooth (9.2), converges pointwise, pointwise convergence, converges uniformly, uniform convergence, uniform norm, uniformly Cauchy (6.1), convolution (5.5), Fubini for sums (2.6), polar coordinates (8.5), radius of convergence (2.6), relatively compact (7.4), removable singularity (3.4).
- Untitled propositions, lemmas, theorems, corollaries and remarks: 11.1.2 to 11.1.5, 11.2.2, 11.2.3, 11.2.7 to 11.2.9, 11.2.11, 11.2.12, 11.2.14, 11.3.1, 11.3.4, 11.3.7, 11.3.8, 11.4.2 (its first item is Euler's formula), 11.5.1, 11.5.3, 11.5.4, 11.6.5, 11.6.7, 11.6.8, 11.6.10, 11.6.11, 11.7.2 to 11.7.4, 11.7.6, 11.7.11, 11.8.1, 11.8.2, 11.8.4 to 11.8.6, 11.8.8, 11.8.10 to 11.8.12.
- Emphasized words that are not in the Index: limit point (11.3, another name for cluster point), Weierstrass's Non-Differentiable Function (an exercise title in 11.8).
- Emphasis that is not a name: stressed words (not, do not, not true, generate), the claims and statements inside proofs, Warning!, (Proof of Theorem 11.8.10).
