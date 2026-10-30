# Proof Techniques: term checklist

Not built (README). Source: Sundstrom, *Mathematical Reasoning: Writing and Proof* (version 2.1, 2022; CC BY-NC-SA), in the PreTeXt web edition by Grand Valley State University (gvsuoer.github.io/sundstrom-textbook, sanctioned by the author, slightly different from the official PDF), cached 2026-10-30: table of contents, the 9 chapters with all their sections, appendix A and the Index, in `design-refs/official-docs/cache/html/gvsuoer-sundstrom-textbook-*` (the Markdown copies keep only the first box of each page; read the HTML). Chosen from the three proofs textbooks of the AIM Approved Textbooks list (Hammack, Fields, Sundstrom) as the only one with a web edition; the user chose the whole book, since every chapter is written from the point of view of proof.

The terms are the book's Index (297 entries, 165 sub-entries), each placed in the section its link points to (the Definition box when an entry links to several places, otherwise its first link), plus the titled results the Index misses or links only to a subsection (Theorem 2.8 De Morgan's Laws, Theorem 2.12 Important Logical Equivalencies, The Division Algorithm, Theorem 3.34 Properties of Congruence Modulo n, Procedure for a Proof by Mathematical Induction, Theorem 5.24 Algebra of Set Operations, Theorem 8.17, Theorem 9.9, Theorem 9.32, Theorem 9.34). A sub-entry is named in natural order (Domain of a Function). Numbered Propositions and Theorems without a name are not terms. Left out of the boxes: the titled boxes Using the Extended (or Second) Principle of Mathematical Induction (how-to steps for the principles kept), Theorem 3.36 (the same name as 3.34), Theorem 5.34 and the two untitled "Let f: A → B" boxes of 6.3; appendices B and C (answers) and D (List of Symbols, which the IUPAC Green Book entry covers). Every section of the book has a page, the chapter summaries and appendix A too, though they define no terms.

Definitions are quoted from the Definition box, or from the sentence that names the term (with the sentence before it when the term's sentence cannot stand alone), and checked against the cached HTML by script. The book's own TeX macros are written out as they are defined (`\mynot` as `\neg`, `\N` as `\mathbb N`, `\R` as `\mathbb R`), since the site's MathJax does not know them; a vertical bar is `\vert`; a displayed equation (`equation*`) is quoted inline; math nested in `\text{}` is moved out of it (`\text{ if } x \geq 0\text{; }`), since Markdig cannot read `$` inside a formula. `align*` is quoted as `aligned`, and the book's `\card` macro as `\mathbf{card}`. A row whose quote describes a related term starts with "(context)" (Derivative, Prime Factorization). Done: all 324 terms, chapters 1 to 9 (2026-10-30).

## Kept (324)

| Section | Terms |
|---|---|
| 1.1 | Statement, Proposition, Conjecture, Counterexample, Conditional Statement, Hypothesis, Conclusion, Truth Table, Real Number System, Closure Properties, Natural Numbers, Integers, Closed under Addition, Closed under Multiplication, Closed under Subtraction |
| 1.2 | Definition, Even Integer, Odd Integer, Direct Proof, Know-Show Table, Backward Question, Forward Question, Writing Guidelines, Mathematical Proof, Pythagorean Theorem, Type 0 Integer, Type 1 Integer, Type 2 Integer, Quadratic Equation, Quadratic Formula, Pythagorean Triple |
| 2.1 | Logical Operator, Compound Statement, Connective, Conjunction, Disjunction, Negation, Conditional, Implication, Exclusive Or, Inclusive Or, Only If, Necessary Condition, Sufficient Condition, Biconditional Statement, Tautology, Contradiction, Modus Ponens, Syllogism |
| 2.2 | Logically Equivalent, Converse, Contrapositive, De Morgan's Laws for Statements, Negation of a Conditional Statement, Important Logical Equivalencies, Distributive Laws for Statements |
| 2.3 | Roster Method, Variable, Constant, Universal Set, Real Numbers, Equal Sets, Set Equality, Subset, Contained in a Set, Open Sentence, Predicate, Propositional Function, Solution Set, Truth Set, Set Builder Notation, Empty Set |
| 2.4 | Quantifier, Universal Quantifier, Existential Quantifier, Negation of a Quantified Statement, Perfect Square, Divides Property, Strictly Increasing, Continuous, Cauchy Sequence, Neighborhood, Commutative Operation, Ring, Zero Divisor, Prime Number, Composite Number, Upper Bound, Least Upper Bound |
| 3.1 | Divides, Divisor, Factor, Multiple, Proof, Undefined Term, Axiom, Theorem, Lemma, Corollary, Construction Method, Congruence, Congruent Modulo n, Reflexive Property of Congruence, Symmetric Property of Congruence, Transitive Property of Congruence, Consecutive Natural Numbers |
| 3.2 | Proof Using the Contrapositive, Proof of a Biconditional Statement, Constructive Proof, Existence Theorem, Nonconstructive Proof, Intermediate Value Theorem |
| 3.3 | Proof by Contradiction, Rational Number, Irrational Number, Magic Square |
| 3.4 | Proof Using Cases, Absolute Value, Triangle Inequality, Consecutive Integers |
| 3.5 | Division Algorithm, Quotient, Remainder, Properties of Congruence Modulo n |
| 3.6 | Goldbach's Conjecture, Twin Primes, Fermat's Last Theorem |
| 4.1 | Inductive Set, Principle of Mathematical Induction, Basis Step, Inductive Step, Procedure for a Proof by Mathematical Induction, Inductive Assumption, Inductive Hypothesis, Wallis Sine Formulas, Wallis Cosine Formulas |
| 4.2 | Factorial, Domino Theory, Extended Principle of Mathematical Induction, Second Principle of Mathematical Induction, De Moivre's Theorem |
| 4.3 | Recurrence Relation, Initial Condition, Recursive Definition, Fibonacci Numbers, Geometric Sequence, Geometric Series, Binet's Formula, Arithmetic Sequence, Lucas Numbers, Compound Interest, Future Value, Ordinary Annuity |
| 5.1 | Union, Intersection, Difference of Two Sets, Complement of a Set, Relative Complement, Venn Diagram, Proper Subset, Power Set, Cardinality, Complex Numbers, Law of Trichotomy, Interval, Open Interval, Closed Interval, Half-Open Interval, Open Ray, Closed Ray |
| 5.2 | Choose-an-Element Method, Proving Set Equality, Disjoint Sets, Element-Chasing Proof |
| 5.3 | Algebra of Sets, Set Theory, Algebra of Set Operations, Properties of the Empty Set and the Universal Set, Idempotent Laws for Sets, Commutative Laws for Sets, Associative Laws for Sets, Distributive Laws for Sets, De Morgan's Laws for Sets, Commutative Laws for Real Numbers, Associative Laws for Real Numbers, Distributive Law for Real Numbers, Additive Identity, Multiplicative Identity, Additive Inverse, Multiplicative Inverse |
| 5.4 | Ordered Pair, Coordinates, Cartesian Product, Cartesian Plane, Ordered Triple |
| 5.5 | Family of Sets, Union of a Family of Sets, Intersection of a Family of Sets, Indexed Family of Sets, Indexing Set, Union of an Indexed Family of Sets, Intersection of an Indexed Family of Sets, De Morgan's Laws for an Indexed Family of Sets, Distributive Laws for an Indexed Family of Sets, Pairwise Disjoint |
| 6.1 | Birthday Function, Sum of Divisors Function, Function, Mapping, Domain of a Function, Codomain, Image of an Element, Preimage of an Element, Independent Variable, Dependent Variable, Range, Real Function, Arrow Diagram, Number of Divisors Function, Set of Divisors Function |
| 6.2 | Polygon, Regular Polygon, Diagonal of a Polygon, Triangle, Quadrilateral, Pentagon, Octagon, Derivative, Equal Functions, Identity Function, Average of a Finite Set of Numbers, Sequence, Function of Two Variables, Projection Function, Matrix, Determinant, Transpose, Fundamental Theorem of Calculus |
| 6.3 | Injection, One-to-One Function, Surjection, Onto Function, Bijection, Piecewise Defined Function |
| 6.4 | Composite Function, Composition of Functions, Inner Function, Outer Function, Decomposing Functions, Chain Rule |
| 6.5 | Function as a Set of Ordered Pairs, Inverse of a Function, Invertible Function, Inverse Sine Function, Arcsine Function |
| 6.6 | Image of a Set, Preimage of a Set, Inverse Image of a Set, Image of an Intersection, Image of a Union, Preimage of an Intersection, Preimage of a Union |
| 7.1 | Relation, Domain of a Relation, Range of a Relation, Divides Relation, Directed Graph, Digraph, Vertex, Directed Edge, Inverse of a Relation |
| 7.2 | Reflexive, Symmetric, Transitive, Equivalence Relation, Identity Relation, Equality Relation, Antisymmetric Relation, Circular Relation |
| 7.3 | Equivalence Class, Congruence Class, Properties of Equivalence Classes, Partition |
| 7.4 | Integers Modulo n, Modular Arithmetic, Divisibility Test |
| 8.1 | Common Divisor, Greatest Common Divisor, System of Integers, Euclidean Algorithm, Linear Combination, Well-Ordering Principle |
| 8.2 | Prime Factorization, Relatively Prime Integers, Euclid's Lemma, Fundamental Theorem of Arithmetic, Unique Factorization, Distribution of Prime Numbers, Twin Prime Conjecture |
| 8.3 | Diophantine Equation, Linear Diophantine Equation in One Variable, Linear Diophantine Equation, Linear Congruence |
| 9.1 | Equivalent Sets, One-to-One Correspondence, Finite Set, Infinite Set, Cardinal Number, Properties of Finite Sets, Pigeonhole Principle |
| 9.2 | Aleph, Countably Infinite Set, Denumerable Set, Countable Set, Uncountable Set |
| 9.3 | Dodge Ball, Decimal Expression for a Real Number, Normalized Form of a Decimal Expression, Cantor's Diagonal Argument, Continuum, Cardinality c, Cantor's Theorem, Cantor-Schröder-Bernstein Theorem, Continuum Hypothesis |

## Not kept as their own row (148)

| Index entry | Section | Why |
|---|---|---|
| associative laws | - | heading only: no link of its own; its sub-entries carry the terms |
| average | - | heading only: no link of its own; its sub-entries carry the terms |
| biconditional statement / forms of | 2.1 | another index form of a term already kept (same place), or an aspect of it (forms of, proof of, properties, a worked case) |
| Cantor's Theorem | 9.3 | kept, linked to Theorem 9.32 |
| Cantor, Georg | 9.3 | a person, not a term |
| Cantor-Schröder-Bernstein Theorem | 9.3 | kept, linked to Theorem 9.34 |
| cardinality / \(\aleph_0\) | 9.2 | the Definition of Aleph |
| cardinality / finite set | 5.1 | another index form of a term already kept (same place), or an aspect of it (forms of, proof of, properties, a worked case) |
| cardinality / natural numbers | 9.2 | the Definition of Aleph |
| Cohen, Paul | 9.3 | a person, not a term |
| commutative laws | - | heading only: no link of its own; its sub-entries carry the terms |
| composition of functions / inner function | 6.4 | another index form of a term already kept (same place), or an aspect of it (forms of, proof of, properties, a worked case) |
| composition of functions / outer function | 6.4 | another index form of a term already kept (same place), or an aspect of it (forms of, proof of, properties, a worked case) |
| conditional statement / contrapositive of | 2.2 | another index form of a term already kept (same place), or an aspect of it (forms of, proof of, properties, a worked case) |
| conditional statement / converse of | 2.2 | another index form of a term already kept (same place), or an aspect of it (forms of, proof of, properties, a worked case) |
| conditional statement / forms of | 2.1 | another index form of a term already kept (same place), or an aspect of it (forms of, proof of, properties, a worked case) |
| conditional statement / logical equivalencies | 2.2 | another index form of a term already kept (same place), or an aspect of it (forms of, proof of, properties, a worked case) |
| conditional statement / negation | 2.2 | another index form of a term already kept (same place), or an aspect of it (forms of, proof of, properties, a worked case) |
| conditional statement / truth table | 1.1 | another index form of a term already kept (same place), or an aspect of it (forms of, proof of, properties, a worked case) |
| congruence / Division Algorithm | 3.5 | another index form of a term already kept (same place), or an aspect of it (forms of, proof of, properties, a worked case) |
| countably infinite sets | - | heading only: no link of its own; its sub-entries carry the terms |
| countably infinite sets / subsets of | 9.2 | a result about Countably Infinite Set |
| countably infinite sets / union of | 9.2 | a result about Countably Infinite Set (Theorem 9.20) |
| de Moivre, Abraham | 4.2 | a person, not a term |
| De Morgan's Laws | - | heading only: no link of its own; its sub-entries carry the terms |
| De Morgan's Laws / for statements | 2.2 | kept, linked to Theorem 2.8 |
| decimal expression | - | heading only: no link of its own; its sub-entries carry the terms |
| decimal expression / normalized form | 9.3 | another index form of a term already kept (same place), or an aspect of it (forms of, proof of, properties, a worked case) |
| definition / by recursion | 4.3 | another index form of a term already kept (same place), or an aspect of it (forms of, proof of, properties, a worked case) |
| diagonal | 6.2 | another index form of a term already kept (same place), or an aspect of it (forms of, proof of, properties, a worked case) |
| difference of two sets | 5.1 | another index form of a term already kept (same place), or an aspect of it (forms of, proof of, properties, a worked case) |
| Diophantine equation / linear in two variables | 8.3 | another index form of a term already kept (same place), or an aspect of it (forms of, proof of, properties, a worked case) |
| Diophantus of Alexandria | 8.3 | a person, not a term |
| directed graph / directed edge | 7.1 | another index form of a term already kept (same place), or an aspect of it (forms of, proof of, properties, a worked case) |
| directed graph / vertex | 7.1 | another index form of a term already kept (same place), or an aspect of it (forms of, proof of, properties, a worked case) |
| disjoint | 5.2 | another index form of a term already kept (same place), or an aspect of it (forms of, proof of, properties, a worked case) |
| disjoint / pairwise | 5.5 | another index form of a term already kept (same place), or an aspect of it (forms of, proof of, properties, a worked case) |
| distributive laws | - | heading only: no link of its own; its sub-entries carry the terms |
| divisibility test / for 11 | 7.4 | a worked case of Divisibility Test |
| divisibility test / for 3 | 7.4 | a worked case of Divisibility Test |
| divisibility test / for 4 | 7.4 | a worked case of Divisibility Test |
| divisibility test / for 5 | 7.4 | a worked case of Divisibility Test |
| divisibility test / for 9 | 7.4 | a worked case of Divisibility Test |
| Division Algorithm | 3.5 | kept, linked to the box The Division Algorithm |
| Division Algorithm / congruence | 3.5 | another index form of a term already kept (same place), or an aspect of it (forms of, proof of, properties, a worked case) |
| Division Algorithm / using cases | 3.5 | another index form of a term already kept (same place), or an aspect of it (forms of, proof of, properties, a worked case) |
| domain | - | heading only: no link of its own; its sub-entries carry the terms |
| equation numbers | 3.1 | typesetting, not a term |
| Euclid's Elements | 8.2 | a publication, not a term |
| family of sets / indexed | 5.5 | another index form of a term already kept (same place), or an aspect of it (forms of, proof of, properties, a worked case) |
| family of sets / intersection | 5.5 | another index form of a term already kept (same place), or an aspect of it (forms of, proof of, properties, a worked case) |
| family of sets / union | 5.5 | another index form of a term already kept (same place), or an aspect of it (forms of, proof of, properties, a worked case) |
| Fermat, Pierre | 3.6 | a person, not a term |
| Fibonacci Quarterly | 4.3 | a publication, not a term |
| function / bijective | 6.3 | another index form of a term already kept (same place), or an aspect of it (forms of, proof of, properties, a worked case) |
| function / codomain | 6.1 | another index form of a term already kept (same place), or an aspect of it (forms of, proof of, properties, a worked case) |
| function / composite | 6.4 | another index form of a term already kept (same place), or an aspect of it (forms of, proof of, properties, a worked case) |
| function / composition | 6.4 | another index form of a term already kept (same place), or an aspect of it (forms of, proof of, properties, a worked case) |
| function / domain | 6.1 | another index form of a term already kept (same place), or an aspect of it (forms of, proof of, properties, a worked case) |
| function / equality | 6.2 | another index form of a term already kept (same place), or an aspect of it (forms of, proof of, properties, a worked case) |
| function / injective | 6.3 | another index form of a term already kept (same place), or an aspect of it (forms of, proof of, properties, a worked case) |
| function / inverse of | 6.5 | another index form of a term already kept (same place), or an aspect of it (forms of, proof of, properties, a worked case) |
| function / invertible | 6.5 | another index form of a term already kept (same place), or an aspect of it (forms of, proof of, properties, a worked case) |
| function / one-to-one | 6.3 | another index form of a term already kept (same place), or an aspect of it (forms of, proof of, properties, a worked case) |
| function / onto | 6.3 | another index form of a term already kept (same place), or an aspect of it (forms of, proof of, properties, a worked case) |
| function / piecewise defined | 6.3 | another index form of a term already kept (same place), or an aspect of it (forms of, proof of, properties, a worked case) |
| function / projection | 6.2 | another index form of a term already kept (same place), or an aspect of it (forms of, proof of, properties, a worked case) |
| function / range | 6.1 | another index form of a term already kept (same place), or an aspect of it (forms of, proof of, properties, a worked case) |
| function / real | 6.1 | another index form of a term already kept (same place), or an aspect of it (forms of, proof of, properties, a worked case) |
| function / surjective | 6.3 | another index form of a term already kept (same place), or an aspect of it (forms of, proof of, properties, a worked case) |
| Fundamental Theorem | - | heading only: no link of its own; its sub-entries carry the terms |
| Fundamental Theorem / of Arithmetic | 8.2 | kept, linked to Theorem 8.17 |
| Gödel, Kurt | 9.3 | a person, not a term |
| Hemachandra, Acharya | 4.3 | a person, not a term |
| image | - | heading only: no link of its own; its sub-entries carry the terms |
| indexed family of sets / De Morgan's Laws | 5.5 | another index form of a term already kept (same place), or an aspect of it (forms of, proof of, properties, a worked case) |
| indexed family of sets / distributive laws | 5.5 | another index form of a term already kept (same place), or an aspect of it (forms of, proof of, properties, a worked case) |
| indexed family of sets / intersection | 5.5 | another index form of a term already kept (same place), or an aspect of it (forms of, proof of, properties, a worked case) |
| indexed family of sets / union | 5.5 | another index form of a term already kept (same place), or an aspect of it (forms of, proof of, properties, a worked case) |
| integers / consecutive | 3.4 | another index form of a term already kept (same place), or an aspect of it (forms of, proof of, properties, a worked case) |
| integers modulo \(n\) / addition | 7.4 | part of the Definition of Modular Arithmetic |
| integers modulo \(n\) / multiplication | 7.4 | part of the Definition of Modular Arithmetic |
| intersection | - | heading only: no link of its own; its sub-entries carry the terms |
| interval / Cartesian product | 5.4 | a progress check on Cartesian Product |
| interval / closed | 5.1 | another index form of a term already kept (same place), or an aspect of it (forms of, proof of, properties, a worked case) |
| interval / half-open | 5.1 | another index form of a term already kept (same place), or an aspect of it (forms of, proof of, properties, a worked case) |
| interval / open | 5.1 | another index form of a term already kept (same place), or an aspect of it (forms of, proof of, properties, a worked case) |
| Kuratowski, Kazimierz | 5.4 | a person, not a term |
| Leonardo of Pisa | 4.3 | a person, not a term |
| mathematical induction | - | heading only: no link of its own; its sub-entries carry the terms |
| mathematical induction / basis step | 4.1 | another index form of a term already kept (same place), or an aspect of it (forms of, proof of, properties, a worked case) |
| mathematical induction / Extended Principle | 4.2 | another index form of a term already kept (same place), or an aspect of it (forms of, proof of, properties, a worked case) |
| mathematical induction / inductive step | 4.1 | another index form of a term already kept (same place), or an aspect of it (forms of, proof of, properties, a worked case) |
| mathematical induction / Principle | 4.1 | another index form of a term already kept (same place), or an aspect of it (forms of, proof of, properties, a worked case) |
| matrix / determinant | 6.2 | another index form of a term already kept (same place), or an aspect of it (forms of, proof of, properties, a worked case) |
| matrix / transpose | 6.2 | another index form of a term already kept (same place), or an aspect of it (forms of, proof of, properties, a worked case) |
| natural numbers / consecutive | 3.1 | another index form of a term already kept (same place), or an aspect of it (forms of, proof of, properties, a worked case) |
| normalized form | - | heading only: no link of its own; its sub-entries carry the terms |
| number | - | heading only: no link of its own; its sub-entries carry the terms |
| number / rational | 3.3 | another index form of a term already kept (same place), or an aspect of it (forms of, proof of, properties, a worked case) |
| Pigeonhole Principle | 9.1 | kept, linked to Theorem 9.9 |
| polygon / regular | 6.2 | another index form of a term already kept (same place), or an aspect of it (forms of, proof of, properties, a worked case) |
| power set / cardinality | 5.1 | an activity on Power Set |
| preimage | - | heading only: no link of its own; its sub-entries carry the terms |
| prime numbers | - | heading only: no link of its own; its sub-entries carry the terms |
| prime numbers / twin | 8.2 | another index form of a term already kept (same place), or an aspect of it (forms of, proof of, properties, a worked case) |
| proof / biconditional statement | 3.2 | another index form of a term already kept (same place), or an aspect of it (forms of, proof of, properties, a worked case) |
| proof / constructive | 3.2 | another index form of a term already kept (same place), or an aspect of it (forms of, proof of, properties, a worked case) |
| proof / direct | 1.2 | another index form of a term already kept (same place), or an aspect of it (forms of, proof of, properties, a worked case) |
| proof / element-chasing | 5.2 | another index form of a term already kept (same place), or an aspect of it (forms of, proof of, properties, a worked case) |
| proof / using cases | 3.4 | another index form of a term already kept (same place), or an aspect of it (forms of, proof of, properties, a worked case) |
| quantifier / existential | 2.4 | another index form of a term already kept (same place), or an aspect of it (forms of, proof of, properties, a worked case) |
| quantifier / universal | 2.4 | another index form of a term already kept (same place), or an aspect of it (forms of, proof of, properties, a worked case) |
| rational numbers | 1.1 | kept once, as Rational Number in 3.3, where the book defines it |
| ray | - | heading only: no link of its own; its sub-entries carry the terms |
| ray / closed | 5.1 | another index form of a term already kept (same place), or an aspect of it (forms of, proof of, properties, a worked case) |
| ray / open | 5.1 | another index form of a term already kept (same place), or an aspect of it (forms of, proof of, properties, a worked case) |
| relation / antisymmetric | 7.2 | another index form of a term already kept (same place), or an aspect of it (forms of, proof of, properties, a worked case) |
| relation / circular | 7.2 | another index form of a term already kept (same place), or an aspect of it (forms of, proof of, properties, a worked case) |
| relation / domain | 7.1 | another index form of a term already kept (same place), or an aspect of it (forms of, proof of, properties, a worked case) |
| relation / equality | 7.2 | another index form of a term already kept (same place), or an aspect of it (forms of, proof of, properties, a worked case) |
| relation / equivalence | 7.2 | another index form of a term already kept (same place), or an aspect of it (forms of, proof of, properties, a worked case) |
| relation / identity | 7.2 | another index form of a term already kept (same place), or an aspect of it (forms of, proof of, properties, a worked case) |
| relation / inverse of | 7.1 | another index form of a term already kept (same place), or an aspect of it (forms of, proof of, properties, a worked case) |
| relation / range | 7.1 | another index form of a term already kept (same place), or an aspect of it (forms of, proof of, properties, a worked case) |
| relation / reflexive on | 7.2 | another index form of a term already kept (same place), or an aspect of it (forms of, proof of, properties, a worked case) |
| relation / symmetric | 7.2 | another index form of a term already kept (same place), or an aspect of it (forms of, proof of, properties, a worked case) |
| relation / transitive | 7.2 | another index form of a term already kept (same place), or an aspect of it (forms of, proof of, properties, a worked case) |
| sequence / arithmetic | 4.3 | another index form of a term already kept (same place), or an aspect of it (forms of, proof of, properties, a worked case) |
| sequence / geometric | 4.3 | another index form of a term already kept (same place), or an aspect of it (forms of, proof of, properties, a worked case) |
| set | - | heading only: no link of its own; its sub-entries carry the terms |
| set / complement | 5.1 | another index form of a term already kept (same place), or an aspect of it (forms of, proof of, properties, a worked case) |
| set / equality | 2.3 | another index form of a term already kept (same place), or an aspect of it (forms of, proof of, properties, a worked case) |
| set / intersection | 5.1 | another index form of a term already kept (same place), or an aspect of it (forms of, proof of, properties, a worked case) |
| set / power | 5.1 | another index form of a term already kept (same place), or an aspect of it (forms of, proof of, properties, a worked case) |
| set / relative complement | 5.1 | another index form of a term already kept (same place), or an aspect of it (forms of, proof of, properties, a worked case) |
| set / roster method | 2.3 | another index form of a term already kept (same place), or an aspect of it (forms of, proof of, properties, a worked case) |
| set / union | 5.1 | another index form of a term already kept (same place), or an aspect of it (forms of, proof of, properties, a worked case) |
| statement / biconditional | 2.1 | another index form of a term already kept (same place), or an aspect of it (forms of, proof of, properties, a worked case) |
| statement / compound | 2.1 | another index form of a term already kept (same place), or an aspect of it (forms of, proof of, properties, a worked case) |
| statement / conditional | 1.1 | another index form of a term already kept (same place), or an aspect of it (forms of, proof of, properties, a worked case) |
| subset | - | heading only: no link of its own; its sub-entries carry the terms |
| subset / proper | 5.1 | another index form of a term already kept (same place), or an aspect of it (forms of, proof of, properties, a worked case) |
| union | - | heading only: no link of its own; its sub-entries carry the terms |
| universal set / properties | 5.3 | another index form of a term already kept (same place), or an aspect of it (forms of, proof of, properties, a worked case) |
| variable / dependent | 6.1 | another index form of a term already kept (same place), or an aspect of it (forms of, proof of, properties, a worked case) |
| variable / independent | 6.1 | another index form of a term already kept (same place), or an aspect of it (forms of, proof of, properties, a worked case) |
| Wiles, Andrew | 6.1 | a person, not a term |
