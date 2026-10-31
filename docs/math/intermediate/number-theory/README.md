# Number Theory: term checklist

Source: Crisman, *Number Theory: In Context and Interactive* (math.gordon.edu/ntic/ntic, June 26, 2024 edition), cached 2026-10-30 a chapter at a time: pages as raw HTML in `design-refs/official-docs/cache/data/ntic-raw/` (the Markdown in `cache/md/math-ntic-ntic-*` keeps only the first box of each page, so quotes are checked against the raw HTML); the Index is `cache/html/math-ntic-ntic-index-page-html.html`.

The method is Real Analysis's (see `../real-analysis/README.md`): the terms are the book's Index, each placed in the section its entry first links to, quoted from the linked element. This book marks the words it defines (`dfn class="terminology"`); those are added where the Index misses them. Two cases new in this book:

- A chapter page defines terms before its first section (1 Prologue: Definition 1.0.1). They are rows on the chapter page, right after the chapter row, and items of the chapter frame itself in the chapter figure, before the section groups.
- An Index entry whose first link is in the front matter (the prefaces), which is not part of the map, is placed at its first link inside the chapters.

Exercise sections (1.4, 3.6, 7.7, 9.6, 10.6, ...) have no pages, so Index links into them are not placed.

## Chapter 1 Prologue (done 2026-10-30)

| Term | Section | Where the book defines it | Taken from | Note |
|---|---|---|---|---|
| Counting Numbers | 1 | Definition 1.0.1 | Index; also marked as a defined word in the text | Index entry "natural numbers" (see numbers, counting) is the same term |
| Integers | 1 | Definition 1.0.1 | Index; also marked as a defined word in the text |  |
| Conductor | 1.1 | section 1.1 | Index; also marked as a defined word in the text | Index entries "coin problem" and "Frobenius" both say see conductor |
| Well-Ordering Principle | 1.2 | Axiom 1.2.1 | Index |  |
| Proof by Contradiction | 1.2 | Remark 1.2.3 | Index; also marked as a defined word in the text | Index subentry "proof, by contradiction" |
| Proof by Contrapositive | 1.2 | Remark 1.2.3 | Index; also marked as a defined word in the text | Index subentry "proof, by contrapositive" |
| Proof by Induction | 1.2 | subsection 1.2.2 | Index; also marked as a defined word in the text | Index subentry "proof, by induction"; "induction proof" says see proof by induction |
| Divisibility | 1.2 | Definition 1.2.5 | Index; also marked as a defined word in the text | the text names it "divides" and "divisible" |
| Divisor | 1.2 | Definition 1.2.5 | Index; also marked as a defined word in the text |  |
| Proper Divisor | 1.2 | Example 1.2.6 | Index; also marked as a defined word in the text | Index subentry "divisor, proper"; "aliquot parts" says see divisor, proper |
| Direct Proof | 1.2 | subsection 1.2.3 | Index; also marked as a defined word in the text | Index subentry "proof, direct" |
| Sage | 1.5 | section 1.5 | Index | first Index link is the Preface to the Student, outside the chapters |
| Sage Cell | 1.5 | section 1.5 | Index; also marked as a defined word in the text | Index subentry "Sage, cells" |
| Sage Note | 1.5 | Sage note 1.5.1 | Index | Index subentry "Sage notes, about"; first Index link is the Preface to the Instructor |
| Python | 1.5 | Sage note 1.5.1 | Index | first Index link is the Preface to the Instructor |

Left out:

- "divisibility, basic facts" (Proposition 1.2.8, Divisibility Facts) and Fact 1.2.2 (Consecutive Integers): results, not concepts.
- "proof, archetype" (Example 1.2.4, Archetype for Induction) and "proof, another easy example" (Example 1.2.7): examples of a proof by induction, not new terms.
- "well-ordering principle, not equivalent to induction" and "conductor, explore with Sage": remarks about a term already placed.
- "ring, example of unique factorization domain": links Definition 1.0.1, which names neither; ring is placed where its own entry first links (section 8.1).
- "base case" and "induction step": quoted in the text, not marked and not in the Index.
- 1.3 Where are we going? defines no terms.

## Chapter 2 Basic Integer Division (done 2026-10-30)

| Term | Section | Where the book defines it | Taken from | Note |
|---|---|---|---|---|
| Division Algorithm | 2.1 | Theorem 2.1.1 | Index |  |
| Quotient | 2.1 | Theorem 2.1.1 | Index |  |
| Remainder | 2.1 | Theorem 2.1.1 | Index |  |
| divmod | 2.1 | Sage note 2.1.2 | Index |  |
| Tuple | 2.1 | Sage note 2.1.2 | Index; also marked as a defined word in the text |  |
| Indexing | 2.1 | Sage note 2.1.2 | Index; also marked as a defined word in the text | Index subentry "Python, indexing" |
| Loop | 2.1 | Sage note 2.1.3 | Index; also marked as a defined word in the text | Index subentry "Python, loop" |
| range | 2.1 | Sage note 2.1.3 | Index |  |
| Common Divisor | 2.2 | Definition 2.2.1 | Index; also marked as a defined word in the text | Index subentry "divisor, common" |
| Greatest Common Divisor | 2.2 | Definition 2.2.1 | Index; also marked as a defined word in the text | Index subentry "divisor, greatest common"; "gcd" is the same sentence |
| Characterizing the Greatest Common Divisor | 2.2 | Theorem 2.2.4 | Index | Index subentry "divisor, characterization" |
| Euclidean Algorithm | 2.3 | section 2.3 | Index | the Index links the whole section first, then Algorithm 2.3.3 |
| Bezout Identity | 2.4 | Definition 2.4.1 | Index; also marked as a defined word in the text | Index entry "Bezout identity" says see Euclidean algorithm, extended |
| Extended Euclidean Algorithm | 2.4 | subsection 2.4.1 | Index; also marked as a defined word in the text | Index entry "xgcd" is the same sentence |
| Relatively Prime | 2.4 | Definition 2.4.9 | Index; also marked as a defined word in the text | Index entry "coprime" is the same sentence ("relatively prime" says see coprime) |
| Mutually Coprime | 2.4 | Definition 2.4.9 | Index; also marked as a defined word in the text | Index subentry "mutually coprime, definition" (the entry itself first links section 6.2); "coprime in pairs" and "mutually relatively prime" say see mutually coprime |

Left out:

- The chapter page itself defines no terms (it only emphasizes "Bezout identity", placed at 2.4).
- "division algorithm, uses of" (subsection 2.1.3), "Euclidean algorithm, example", "proof" and "statement" (Example 2.3.1, Algorithm 2.3.3, Examples 2.4.2 and 2.4.3): parts of a term already placed.
- "well-ordering principle" subentries ("proof of division algorithm using", "Euclid implicitly assuming", "proof of Euclidean algorithm using"): uses of a chapter 1 term.
- "divisor, zero and zero" (Remark 2.2.3), Proposition 2.1.4 and Proposition 2.4.10: untitled remark and propositions.
- People and works: Aryabhata and "Stigler's law of eponymy, example" (Historical remark 2.4.7; the law itself first links section 15.5), Lewis Carroll and Euclid's Elements (Historical remark 2.3.2).
- "dividend" (2.3) and "the Kuṭṭaka" (2.4): named in passing ("sometimes called", "later called"), not marked and not in the Index.
- Example 2.4.8 (Using Bezout to get another Bezout): a titled example, not in the Index.

## Chapter 3 From Linear Equations to Geometry (done 2026-10-30)

| Term | Section | Where the book defines it | Taken from | Note |
|---|---|---|---|---|
| Linear Diophantine Equations | 3.1 | section 3.1 | Index; also marked as a defined word in the text | named like its section, so its quote fills the section row of the Glossary and the figures show no separate box |
| Solutions of Linear Diophantine Equations | 3.1 | Theorem 3.1.2 | Index | Index subentry "linear Diophantine equations, solutions of" |
| Integer Lattice | 3.2 | Definition 3.2.2 | Index; also marked as a defined word in the text |  |
| Rational Number | 3.2 | Definition 3.2.3 | Index; also marked as a defined word in the text |  |
| Irrational Number | 3.2 | Definition 3.2.3 | Index; also marked as a defined word in the text |  |
| Positive Integer Lattice Points | 3.3 | Question 3.3.1 | Index | Index subentries "integer lattice, positive points" and "lattice, positive integer points" link the whole section; named like its section, so its quote fills the section row of the Glossary and the figures show no separate box |
| Integer Programming | 3.3 | section 3.3 | emphasized in the text (not in the Index) |  |
| Pythagorean Theorem | 3.3 | subsection 3.3.1 | Index |  |
| Greatest Integer Function | 3.3 | Definition 3.3.3 | Index | Index entry "floor function" says see greatest integer function |
| Diophantine Equations | 3.4 | subsection 3.4.1 | Index | Index subentry "Diophantine equations, general" |
| Pythagorean Triple | 3.4 | Definition 3.4.2 | Index; also marked as a defined word in the text |  |
| Primitive Pythagorean Triple | 3.4 | Definition 3.4.3 | Index; also marked as a defined word in the text | Index subentry "Pythagorean triple, primitive" |
| Opposite Parity | 3.4 | Definition 3.4.5 | Index; also marked as a defined word in the text | Index subentry "parity, opposite" |
| Same Parity | 3.4 | Definition 3.4.5 | Index; also marked as a defined word in the text | Index subentry "parity, same" |
| Characterization of Primitive Pythagorean Triples | 3.4 | Theorem 3.4.6 | Index | Index subentry "Pythagorean triple, characterization of primitive" |
| Congruent Number Problem | 3.4 | subsection 3.4.3 | Index; also marked as a defined word in the text |  |
| Infinite Descent | 3.4 | subsection 3.4.3 | Index; also marked as a defined word in the text | Index subentry "proof, by infinite descent"; "infinite descent" says see proof by infinite descent |
| Fermat’s Last Theorem | 3.4 | subsection 3.4.3 | Index |  |
| Mordell Equation | 3.5 | section 3.5 | Index; also marked as a defined word in the text |  |
| Bachet Equation | 3.5 | section 3.5 | Index | the Index links Historical remark 3.5.3 first, which does not say what it is; quoted from the sentence that does |
| Elliptic Curve | 3.5 | section 3.5 | Index; also marked as a defined word in the text |  |
| Catalan’s Conjecture | 3.5 | Question 3.5.5 | Index | Index subentry "conjecture, Catalan’s" |
| Mihailescu’s Theorem | 3.5 | Historical remark 3.5.6 | Index |  |

Left out:

- The chapter page defines no terms.
- "linear Diophantine equations, geometric interpretation" (3.2) and "mutually coprime, in Pythagorean triples" (Definition 3.4.3): uses of terms already placed.
- "well-ordering principle, use in infinite descent" and "Bachet equation, as special case of Mordell": the same.
- Untitled results: Propositions 3.4.4, 3.4.9, 3.4.11, Corollaries 3.4.12, 3.4.13, Algorithm 3.4.7, Remark 3.4.8; Examples 3.1.3, 3.1.4, 3.3.4, 3.5.4; Questions 3.4.1 and 3.4.10.
- 3.7 Two facts from the gcd: its Propositions 3.7.1 (When perfect squares divide each other) and 3.7.2 (When the product of coprime numbers is a square) are titled but not in the Index, so the section has no terms.
- People: Diophantus (Historical remark 3.1.1), Bachet, sieur de Méziriac (Historical remark 3.5.2).
- "perfect square" and "perfect (nontrivial) powers": used but not marked and not in the Index.

## Chapter 4 First Steps with Congruence (done 2026-10-30)

| Term | Section | Where the book defines it | Taken from | Note |
|---|---|---|---|---|
| mod(x,m) | 4.1 | section 4.1 | Index |  |
| Relation | 4.1 | section 4.1 | Index; also marked as a defined word in the text |  |
| Congruence | 4.1 | Definition 4.1.1 | Index; also marked as a defined word in the text | Index subentry "congruence, of two numbers"; "is congruent to" and "modulo $n$" are the same sentence |
| Modulus | 4.1 | Definition 4.1.1 | Index; also marked as a defined word in the text |  |
| Lemma | 4.1 | section 4.1 | Index |  |
| Congruence-Remainder | 4.1 | Lemma 4.1.2 | Index | Index subentries "congruence, same as having same remainder" and "remainder, connection to congruence" |
| Type | 4.2 | Sage note 4.2.6 | Index |  |
| Reflexive | 4.3 | Proposition 4.3.1 | marked as a defined word in the text (not in the Index) |  |
| Symmetric | 4.3 | Proposition 4.3.1 | marked as a defined word in the text (not in the Index) |  |
| Transitive | 4.3 | Proposition 4.3.1 | marked as a defined word in the text (not in the Index) |  |
| Equivalence Relation | 4.3 | Proposition 4.3.1 | Index; also marked as a defined word in the text |  |
| Congruence Is an Equivalence Relation | 4.3 | Proposition 4.3.1 | Index | Index subentry "equivalence relation, congruence as example of" |
| Well-Defined | 4.3 | Proposition 4.3.2 | Index; also marked as a defined word in the text |  |
| Congruence Arithmetic Is Well-Defined | 4.3 | Proposition 4.3.2 | Index | Index subentry "congruence, arithmetic well-defined" |
| Residue | 4.4 | Definition 4.4.1 | Index; also marked as a defined word in the text | Index subentry "residue, (mod n)" |
| Equivalence Class (mod n) | 4.4 | Definition 4.4.1 | Index; also marked as a defined word in the text | Index subentry "equivalence class, mod n" |
| Equivalence Class | 4.4 | Fact 4.4.3 | Index; also marked as a defined word in the text |  |
| Partition | 4.4 | Fact 4.4.3 | Index; also marked as a defined word in the text | Index subentry "partition, of sets"; "set partition" says see partition of sets |
| Complete Residue System | 4.4 | Definition 4.4.6 | Index; also marked as a defined word in the text | Index subentry "residues, complete system of"; "complete set of residues" is the same sentence |
| Least Nonnegative Residues | 4.4 | Definition 4.4.6 | Index; also marked as a defined word in the text | Index subentry "residues, least nonnegative" |
| Least Absolute Residues | 4.4 | Definition 4.4.6 | Index; also marked as a defined word in the text | Index subentry "residues, least absolute" |
| Algorithm for Exponentiation (mod n) | 4.5 | Algorithm 4.5.8 | Index | Index subentry "exponentiation (mod n), algorithm for"; the heading "exponentiation (mod n)" has no link of its own |
| List Comprehension | 4.6 | Sage note 4.6.2 | Index; also marked as a defined word in the text |  |
| Congruences | 4.6 | Definition 4.6.3 | Index; also marked as a defined word in the text | Index subentry "congruences, modular equivalent of equations" |

Titled results that an Index entry links (Lemma 4.1.2, Propositions 4.3.1 and 4.3.2, and here Algorithm 4.5.8 through "exponentiation (mod n), algorithm for") are rows of their own, as Theorem 2.2.4 and Theorem 3.4.6 are.

Left out:

- The chapter page defines no terms (it only emphasizes "congruence", placed at 4.1).
- "exponentiation (mod n), not well-defined" and "well-defined, exponentiation (mod n) not an example" (Example 4.4.5): an example of what is not well-defined, under a term already placed.
- "Gauss, introducing congruence notation": a person.
- "tuple" (Sage note 4.2.5): placed at 2.1.
- Untitled results: Facts 4.2.3, 4.5.5, 4.6.4, 4.6.5, Remark 4.5.9; examples and questions.
- Named in passing, not marked and not in the Index: "binary representation" (Algorithm 4.5.8), "representative" (4.4), "repeated squaring" (chapter summary), and the Sage commands `x % m`, `%time`, `%timeit`, `==`; `print` is in the Index with its first link at 5.4 and is placed there.

## Chapter 5 Linear Congruences (done 2026-10-30)

| Term | Section | Where the book defines it | Taken from | Note |
|---|---|---|---|---|
| Linear Congruences | 5 | chapter 5 | Index; also marked as a defined word in the text | named like the chapter, so its quote fills the chapter row of the Glossary and the figure shows no separate box |
| Strategies That Work for Simplifying Congruences | 5.2 | Fact 5.2.1 | Index | Index subentries "linear congruences, simplification strategies" and "coprime, cancellation in linear congruences" |
| System of Congruences | 5.3 | Theorem 5.3.2 | Index |  |
| Chinese Remainder Theorem | 5.3 | Theorem 5.3.2 | Index | Historical remark 5.3.3: "often abbreviated CRT"; Index subentry "mutually coprime, needed for CRT" |
| Inverse of a Number | 5.3 | Definition 5.3.4 | Index; also marked as a defined word in the text | Index subentry "inverse, of a number"; Example 5.3.5 also marks the short name "inverse", for the solution thought of as 1/26 modulo 31 |
| inverse_mod | 5.3 | subsection 5.3.2 | Index | Index subentry "inverse, computing with Sage" is the same sentence; the command itself is in the Sage cell after it |
| Sage Interactive Help | 5.3 | Sage note 5.3.8 | Index | Index subentry "Sage, interactive help" |
| print | 5.4 | Sage note 5.4.3 | Index |  |
| Converting to and from Coprime Moduli | 5.4 | Proposition 5.4.5 | Index | Index subentry "congruences, giving system of congruences" links the paragraph right after it |

Fact 5.2.1 and Proposition 5.4.5 are titled results that an Index subentry points to, so they are rows of their own, like the titled results of chapters 2 to 4. Sections 5.1 and 5.5 define no terms and keep empty frames.

Left out:

- "linear congruences, full solution" (section 5.1) and "system of congruences, linear fully solved" (section 5.5): subentries that link a whole section, under terms already placed; Propositions 5.1.1 and 5.1.3 are untitled.
- Propositions 5.2.6 and 5.2.7 ("Canceling, Part I" and "Part II"): titled, but not in the Index (as in 3.7).
- "inverse, used in proof of CRT" (Algorithm 5.4.1), "Chinese remainder theorem, example" (Example 5.4.2), "Chinese remainder theorem, practical application of" and "mutually coprime, application of CRT" (subsection 5.5.3): uses and examples of terms already placed, not new settings.
- "Qin Jiushao" (Historical remark 5.3.3), Sun Zi and V.-A. Lebèsgue: people.
- Untitled results: Algorithm 5.4.1, Remark 5.1.5; examples and questions.
- Named in passing, not marked and not in the Index: "moduli which are not coprime" (subsection 5.5.1 title), "equivalence classes" (chapter page, placed at 4.4), "least nonnegative residues" and "least absolute residues" (placed at 4.4), "coprime in pairs" (placed at 2.4).

## Chapter 6 Prime Time (done 2026-10-30)

| Term | Section | Where the book defines it | Taken from | Note |
|---|---|---|---|---|
| Prime | 6.1 | Definition 6.1.1 | Index; also marked as a defined word in the text |  |
| Composite Number | 6.1 | Definition 6.1.2 | Index; also marked as a defined word in the text | Index subentry "number, composite" is the same sentence |
| is_prime | 6.1 | subsection 6.1.1 | Index | the command itself is in the Sage cell after the question |
| prime_range | 6.1 | subsection 6.1.1 | Index | one of the questions after "Here are answers to questions you might have about primes that Sage could answer."; the command itself is in the Sage cell after it |
| factor | 6.1 | subsection 6.1.1 | Index | one of the questions after "Here are answers to questions you might have about primes that Sage could answer."; the command itself is in the Sage cell after it |
| Comment | 6.1 | Sage note 6.1.3 | Index | Index subentry "Python, comments" |
| Prime-Generating Polynomial | 6.1 | subsection 6.1.2 | Index | Index subentry "polynomial, prime-generating" |
| Infinitude of Primes | 6.2 | Theorem 6.2.1 | Index | Index subentry "primes, proof of infinitude of" |
| Sieve of Eratosthenes | 6.2 | Algorithm 6.2.3 | Index | Index subentry "sieve, of Eratosthenes" |
| Factorization | 6.3 | Definition 6.3.1 | Index; also marked as a defined word in the text | Index subentry "factorization, of an integer" |
| Prime Factorization | 6.3 | Definition 6.3.1 | Index; also marked as a defined word in the text | Index subentry "factorization, prime" |
| Prime Power Factorization | 6.3 | Definition 6.3.1 | Index; also marked as a defined word in the text | Index subentry "factorization, prime power" |
| Fundamental Theorem of Arithmetic | 6.3 | Theorem 6.3.2 | Index | subsection 6.3.1: "or FTA"; Index subentry "factorization, unique" links the proof in subsection 6.3.2 |
| Maximum | 6.4 | Definition 6.4.3 | Index; also marked as a defined word in the text |  |
| Minimum | 6.4 | Definition 6.4.3 | Index; also marked as a defined word in the text |  |
| prime_divisors | 6.4 | section 6.4 | Index | the commands are in the Sage cell between the two sentences |
| Factorial | 6.4 | Definition 6.4.6 | Index; also marked as a defined word in the text |  |

Theorem 6.2.1 and Algorithm 6.2.3 are titled results that an Index subentry links, so they are rows of their own. The chapter page and section 6.5 define no terms; 6.5 keeps an empty frame.

Left out:

- Definition 6.4.5 ($p^k\parallel n$): a definition box that names no word, only the notation; not in the Index.
- Proposition 6.5.1 ("Converting to and from prime powers") and Example 6.5.3 ("Prime Power Congruences"): titled, but not in the Index.
- "factorization, unique" (subsection 6.3.2) and "factorization, non-unique" (subsection 6.3.2, other algebraic systems): the uniqueness half of the Fundamental Theorem of Arithmetic, named in its row; non-unique factorization is only mentioned in passing.
- "lemma, correct Greek plural of" and "lemma, easier English plural of" (subsection 6.3.2): spellings of a term placed at 4.1.
- "mutually coprime" (subsection 6.2.1): placed at 2.4.
- "Eratosthenes" (Historical remark 6.2.5), Euclid, Euler, Cantor, Joyce, Saidak, Furstenberg, Wallis: people.
- Untitled results: Fact 6.1.4, Lemma 6.3.6, Corollary 6.3.7; examples (including the product and greatest common divisor formulas of Example 6.4.4) and questions.
- Named in passing, not marked and not in the Index: "prime decompositions" (proof of Theorem 6.3.2), "strong induction" (a footnote), "canonical" (6.4), "prime powers" (6.5).

## Chapter 7 First Steps With General Congruences (done 2026-10-30)

| Term | Section | Where the book defines it | Taken from | Note |
|---|---|---|---|---|
| Hensel’s Lemma | 7.2 | Theorem 7.2.3 | Index |  |
| Newton’s Method | 7.2 | subsection 7.2.2 | Index |  |
| Lagrange’s Theorem for Polynomials | 7.4 | Theorem 7.4.1 | Index | Index subentry "Lagrange’s theorem, for polynomials" |
| Wilson’s Theorem | 7.5 | Theorem 7.5.1 | Index |  |
| Fermat’s Little Theorem | 7.5 | Theorem 7.5.3 | Index |  |
| Showing a Mordell Curve Has No Integer Point | 7.6 | Proposition 7.6.3 | Index | Index subentry "Mordell equation, special cases" |
| Combinatorics | 7.8 | section 7.8 | Index; also marked as a defined word in the text |  |

Titled results that an Index entry links (Theorems 7.2.3, 7.4.1, 7.5.1, 7.5.3 and Proposition 7.6.3) are rows of their own. The chapter page and sections 7.1 and 7.3 define no terms; 7.1 and 7.3 keep empty frames.

Left out:

- "square root modulo n, preliminary exploration" (section 7.1) and "congruences, as solutions to congruences" (section 7.3): subentries that link a whole section; "square root modulo n" is defined later (Definition 13.3.1).
- "groups" (subsection 7.5.2): marked as a defined word, but only to announce the concept of Chapter 8, where the Index places it.
- "n-action" and "basic n-rotation" (subsection 7.8.1): named there for that section only ("This notation is not standard"), neither marked nor in the Index.
- "mutually coprime, combine solutions" (Fact 7.2.2, untitled), "Hensel’s lemma, quadratic example" (Example 7.2.5), "Hensel’s lemma, special case" (Remark 7.2.7), "Taylor series, in Hensel’s Lemma" (the proof of Theorem 7.2.3), "Lagrange’s theorem, false for composite moduli" (7.4), "Mordell equation, visualization" and "visualization, Mordell equation" (Figure 7.6.2): examples, remarks and uses under terms already placed.
- People: Hensel, Lagrange, Ibn Al-Haytham, Golomb, Carmichael, Lebèsgue.
- Untitled results: Facts 7.2.2, 7.3.1, 7.3.2, 7.8.3, Remarks 7.5.2, 7.8.5, 7.8.6; examples and questions.
- Named in passing, not marked and not in the Index: "p-adic numbers" (Historical remark 7.2.4), "Burnside Lemma/Cauchy-Frobenius Theorem" and "group actions" (Remark 7.8.6), "directed cyclic graphs" (Remark 7.8.5), "partitions" and "additive number theory" (7.8).

## Chapter 8 The Group of Integers Modulo n (done 2026-10-30)

| Term | Section | Where the book defines it | Taken from | Note |
|---|---|---|---|---|
| Integers Modulo n | 8.1 | Definition 8.1.1 | Index; also marked as a defined word in the text | Index subentry "integers, modulo n" |
| Ring | 8.1 | subsection 8.1.1 | Index; also marked as a defined word in the text |  |
| Addition Table | 8.1 | subsection 8.1.1 | Index | Index subentry "table, addition"; the table itself is Figure 8.1.2 |
| Multiplication Table | 8.1 | subsection 8.1.1 | Index | Index subentry "table, multiplication"; the table itself is Figure 8.1.3 |
| Field | 8.1 | subsection 8.1.3 | Index; also marked as a defined word in the text |  |
| Set | 8.3 | subsubsection 8.3.1.1 | Index | Index entry "sets" |
| Binary Operation | 8.3 | subsubsection 8.3.1.2 | Index; also marked as a defined word in the text | Index subentry "operation, binary" |
| Closed | 8.3 | subsubsection 8.3.1.3 | Index; also marked as a defined word in the text | Index subentry "operation, closed" |
| Associative | 8.3 | subsubsection 8.3.1.4 | Index; also marked as a defined word in the text | Index subentry "operation, associative" |
| Identity Element | 8.3 | subsubsection 8.3.1.5 | Index; also marked as a defined word in the text | Index subentry "group, identity" is the same passage |
| Inverse of a Group Element | 8.3 | subsubsection 8.3.1.6 | Index | Index subentry "inverse, of a group element" |
| Group | 8.3 | Definition 8.3.3 | Index; also marked as a defined word in the text | also marked at the opening of section 8.3: "That abstraction is the concept of group" |
| Socks and Shoes Property | 8.3 | Fact 8.3.7 | Index | the name is the Index subentry "group, socks and shoes property"; "inverse, of a product" links the same fact |
| Finite Group | 8.3 | subsubsection 8.3.3.3 | Index; also marked as a defined word in the text | Index subentry "group, finite" |
| Order of a Group | 8.3 | Definition 8.3.8 | Index; also marked as a defined word in the text | Index subentries "group, order of" and "order, of a group" |
| Pigeonhole Principle | 8.3 | subsubsection 8.3.3.5 | Index; also marked as a defined word in the text |  |
| Order of an Element | 8.3 | Definition 8.3.10 | Index; also marked as a defined word in the text | Index subentries "group, order of an element" and "order, of a group element" |
| Lagrange’s Theorem on Group Order | 8.3 | Theorem 8.3.12 | Index | Index subentry "Lagrange’s theorem, on group order" |
| Generator | 8.3 | subsubsection 8.3.3.7 | Index; also marked as a defined word in the text | Index subentry "group, generator of" |
| Cyclic Group | 8.3 | subsubsection 8.3.3.7 | Index; also marked as a defined word in the text | Index subentry "group, cyclic" |
| Commutative | 8.3 | subsubsection 8.3.3.8 | Index; also marked as a defined word in the text | Index subentry "operation, commutative" |
| Abelian Group | 8.3 | subsubsection 8.3.3.8 | Index; also marked as a defined word in the text | Index subentry "group, Abelian" |

Index subentries that name a concept in a new setting are rows: "inverse, of a group element", "table, addition" and "table, multiplication". The untitled Fact 8.3.7 is a row because the Index names it ("group, socks and shoes property"). Theorem 8.3.12 is titled and Index-linked. The book's $|G|$ and $|x|$ are written `\vert G\vert` and `\vert x\vert` in the quotes, since a bare `|` would split the table cell and `\|` renders as a double bar. The chapter page and section 8.2 define no terms; 8.2 keeps an empty frame.

Left out:

- "exponentiation (mod n), visualization" and "visualization, exponentiation (mod n)" (subsection 8.2.1): a figure for a term placed at 4.5.
- "inverse, modulo p" (Fact 8.1.5, untitled) and "inverse, visualize" (subsection 8.1.3): under the inverse placed at 5.3.
- "operation, example where fails" (Example 8.3.1) and "group, solving equations in" (subsubsection 8.3.3.1, an untitled statement): an example and a use of terms already placed.
- "well-ordering principle, use to define order of group element" (subsubsection 8.3.3.5): a use of the term placed at 1.2.
- "inverse_mod" (subsection 8.1.3): placed at 5.3.
- Lagrange: a person.
- Untitled results: Fact 8.1.5, Remark 8.3.5; examples and questions; Sage note 8.2.2 (not in the Index).
- Named in passing, not marked and not in the Index: "group theory" and "algebraic structures" (chapter page), "identity matrix", "inverse matrix", "reciprocal", "multiplicative inverse" (8.3).

## Chapter 9 The Group of Units and Euler’s Function (done 2026-10-30)

| Term | Section | Where the book defines it | Taken from | Note |
|---|---|---|---|---|
| Group of Units | 9.1 | Definition 9.1.2 | Index; also marked as a defined word in the text | Index subentry "units, group of" |
| Unit | 9.1 | subsubsection 9.1.2.2 | Index; also marked as a defined word in the text | Index entry "units" |
| Euler Phi Function | 9.2 | Definition 9.2.1 | Index | Index entry "Euler ϕ function"; the name is in the paragraph after the definition |
| Field with One Element | 9.2 | Remark 9.2.2 | Index | Index subentry "field, with one element"; the book gives no definition and points to nLab in a footnote |
| Euler’s Theorem | 9.2 | Theorem 9.2.5 | Index |  |
| euler_phi | 9.3 | Sage note 9.3.2 | Index |  |
| Multiplicativity | 9.5 | Fact 9.5.2 | Index | the name is the title of subsection 9.5.2; Index subentries "multiplicative function, Euler’s function as" and "Euler’s theorem, multiplicative" |
| Formula for the Conductor | 9.7 | Fact 9.7.3 | Index | the name is the section’s words "a formula for the conductor"; Index subentry "conductor, solution" |

Untitled Facts 9.5.2 and 9.7.3 are rows because the Index names them ("multiplicative function, Euler’s function as"; "conductor, solution"); their names are the book's own words for them (the title of subsection 9.5.2; "a formula for the conductor" in section 9.7). "field, with one element" is an Index subentry for a new setting, so it is a row although the book gives no definition. The book's $|U_n|$ is written `\vert U_n \vert`. The chapter page and section 9.4 define no terms; 9.4 keeps an empty frame.

Left out:

- "multiplicative" (section 9.5, a defined word): it previews Definition 18.1.2, where the term will be placed.
- "Euler’s theorem, exploring formulas" (section 9.4) and "Euler’s theorem, using for inverses" (subsection 9.3.1): an exploration and a use of terms already placed; Question 9.4.1 and Question 9.4.2 are questions.
- "inverse, group of units" (Proposition 9.1.4, untitled) and "units, examples" (Example 9.1.5): a check that the group of units is a group, and an example.
- Fact 9.5.1 ($\phi(p^e)$) and Fact 9.5.4 ($\sum_{d\mid n}\phi(d)=n$): untitled and not named by the Index ("partition, of sets" links Fact 9.5.4 but has its first link elsewhere).
- Index entries with their first link in another chapter: "Chinese remainder theorem" (9.3.2), "list comprehension" (Sage note 9.3.3), "group, solving equations in" (Example 9.1.1).
- Euler: a person.
- Sage note 9.1.6 and Sage commands, not in the Index: `Integers(n).unit_group_order()`, `%time`.
- Named in passing, not marked and not in the Index: "residue class", "subsets", "cardinalities", "disjoint", "one-to-one correspondence" (9.5, 9.7).

## Chapter 10 Primitive Roots (done 2026-10-30)

| Term | Section | Where the book defines it | Taken from | Note |
|---|---|---|---|---|
| Primitive Root | 10.1 | Definition 10.1.1 | Index; also marked as a defined word in the text |  |
| Filtered List Comprehension | 10.1 | Sage note 10.1.3 | Index | Index subentry "list comprehension, filtered"; list comprehension itself is placed at 4.6 |
| Characterization of a Primitive Root | 10.1 | Proposition 10.1.4 | Index | Index subentry "primitive root, characterization of"; the proposition is untitled |
| Testing for Primitive Roots | 10.2 | Lemma 10.2.3 | Index | Index subentry "primitive root, testing for" |
| Number of Primitive Roots | 10.3 | Fact 10.3.6 | Index | Index subentry "primitive root, number of"; the fact is untitled |
| Primitive Roots Exist for Primes | 10.4 | Theorem 10.4.1 | Index | Index subentry "primitive root, primes possess" |
| primitive_root | 10.5 | subsection 10.5.1 | Index |  |
| Discrete Logarithm | 10.5 | subsection 10.5.2 | Index; also marked as a defined word in the text | Index subentry "logarithm, discrete" |

Untitled Proposition 10.1.4 and Fact 10.3.6 are rows because the Index names them ("primitive root, characterization of"; "primitive root, number of"); "list comprehension, filtered" is an Index subentry for a new setting (Sage note 10.1.3). Lemma 10.2.3 and Theorem 10.4.1 are titled and Index-linked. The chapter page and section 10.7 define no terms; 10.7 keeps an empty frame.

Left out:

- "Fermat’s little theorem, visualization" and "visualization, Fermat’s little theorem" (chapter page, Figure 10.0.1), "Euler’s theorem, visualization" and "visualization, Euler’s theorem" (10.1): figures for terms placed at 7.5 and 9.2.
- "cyclic group" and "generator" (marked in the proof of Proposition 10.1.4): placed at 8.3; "group, cyclic" and "group, generator of" have their first link there.
- "primitive root, use in solving congruences" (section 10.5, with "Finding a higher root" in subsection 10.5.1): a use of terms already placed.
- Untitled results not named by the Index: Proposition 10.2.5, Fact 10.3.1, Proposition 10.3.2, Fact 10.3.3, Lemma 10.3.4, Lemma 10.3.5, Claim 10.4.4; examples and questions.
- "range" (10.5): first link at 2.1.
- Sage notes 10.0.2, 10.2.2 and 10.5.5: not in the Index.
- Named in passing, not marked and not in the Index: "colormap" (chapter page), "cryptography", "higher root", "subgroup" (10.5).

## Chapter 11 An Introduction to Cryptography (done 2026-10-30)

| Term | Section | Where the book defines it | Taken from | Note |
|---|---|---|---|---|
| next_prime | 11 | chapter 11 | Index | the command itself is in the Sage cell after the sentence |
| Cryptography | 11.1 | section 11.1 | Index; also marked as a defined word in the text | "cryptology" is named as another name |
| Code | 11.1 | section 11.1 | Index; also marked as a defined word in the text |  |
| Cipher | 11.1 | section 11.1 | Index; also marked as a defined word in the text | Index subentry "cryptography, cipher" is the same sentence |
| Encode | 11.1 | subsection 11.1.1 | Index; also marked as a defined word in the text |  |
| def | 11.1 | Sage note 11.1.1 | Index |  |
| Decode | 11.1 | subsection 11.1.1 | Index; also marked as a defined word in the text | the book gives no more than this; the process is the reverse of encoding, turning a positive integer back into a message (subsection 11.1.1) |
| Encryption | 11.2 | section 11.2 | Index; also marked as a defined word in the text | "enciphering" and "encrypting" are other names in the same sentence; named like its section, so its quote fills the section row of the Glossary and the figures show no separate box |
| Key | 11.2 | section 11.2 | Index; also marked as a defined word in the text |  |
| Decryption | 11.2 | section 11.2 | Index; also marked as a defined word in the text |  |
| Encryption Key | 11.2 | section 11.2 | Index; also marked as a defined word in the text | Index entry "encryption key" and subentry "key, encryption" |
| Decryption Key | 11.2 | section 11.2 | Index; also marked as a defined word in the text | Index subentries "decryption, key" and "key, decryption" |
| Symmetric Key Cryptography | 11.2 | subsection 11.2.1 | Index; also marked as a defined word in the text |  |
| Asymmetric Key Cryptography | 11.2 | subsection 11.2.5 | Index; also marked as a defined word in the text |  |
| Public-Key Cryptography | 11.2 | subsection 11.2.5 | Index; also marked as a defined word in the text | Index entry "public-key cryptography" and subentry "cryptography, public-key" |
| Diffie-Hellman Encryption | 11.3 | Algorithm 11.3.3 | Index | Index subentries "Diffie-Hellman, encryption" and "encryption method, Diffie-Hellman", first linked at subsection 11.3.1, where the method is called "the Diffie-Hellman method" |
| Key Exchange | 11.4 | section 11.4 | Index; also marked as a defined word in the text | Index subentries "cryptography, key exchange" and "key, exchange" link Algorithm 11.4.2 |
| Diffie-Hellman Key Exchange | 11.4 | Algorithm 11.4.2 | Index | Index subentry "Diffie-Hellman, key exchange" |
| Man in the Middle Attack | 11.4 | subsection 11.4.2 | Index | Index entry "‘man in the middle’ attack" and subentry "cryptography, ‘man in the middle’ attack" |
| Trapdoor | 11.5 | section 11.5 | Index; also marked as a defined word in the text | Index subentry "cryptography, trapdoor" is the same sentence |
| Elliptic Curve Cryptography | 11.5 | subsection 11.5.1 | Index | Index subentries "cryptography, elliptic curve", "encryption method, elliptic curve" and "elliptic curves, cryptographic applications" |
| Fermat Number | 11.5 | subsection 11.5.1 | Index | Index entry "Fermat numbers"; the book gives no definition here |
| RSA Encryption Algorithm | 11.5 | Algorithm 11.5.5 | Index | Index subentry "encryption method, RSA"; RSA stands for Rivest, Shamir and Adleman (Historical remark 11.5.2) |
| Digital Signature | 11.6 | subsection 11.6.1 | Index | Index entry "digital signature" and subentry "cryptography, digital signature"; the method is the paragraphs before, from "Suppose I want to let someone verify I am who I say I am" |
| Germain Prime | 11.6 | subsection 11.6.4 | Index; also marked as a defined word in the text |  |
| Safe Prime | 11.6 | subsection 11.6.4 | Index; also marked as a defined word in the text | Index subentry "prime, safe"; $p=2p'+1$ and $q=2q'+1$ with $p'$ and $q'$ Germain primes |
| Secret Sharing | 11.7 | Algorithm 11.7.1 | Index | Index entry "secret sharing" and subentry "cryptography, secret sharing", first linked at subsection 11.7.1 |

Index subentries under "cryptography" (cipher, encode, decode, encryption, decryption, public-key, trapdoor, digital signature, secret sharing and the rest) name the same passages as the main entries and are noted in the rows, not rows of their own. "Fermat numbers" is an Index entry with its first link in subsection 11.5.1, so it is a row although the book gives no definition there. Algorithms 11.3.3, 11.4.2, 11.5.5 and 11.7.1 are titled and Index-linked. Section 11.8 is exercises and has no page.

Left out:

- "coprime, needed for Diffie-Hellman" (subsection 11.3.1) and "exponentiation (mod n), in cryptography" (section 11.3): uses of terms placed at 2.4 and 4.5.
- Germain (Historical remark 11.6.2), and the people in Historical remarks 11.3.5, 11.4.1 and 11.5.2 (Diffie, Hellman, Merkle, Rivest, Shamir, Adleman): people.
- Index entries with their first link in another chapter: "Chinese remainder theorem", "mutually coprime, application of CRT" (11.7), "units, group of" (11.6).
- Untitled results: Fact 11.2.2, Remarks 11.3.2 and 11.5.3; examples.
- Sage notes 11.1.2, 11.2.1, 11.3.1, 11.3.4, 11.3.6, 11.5.1 and 11.6.1: reminders, not in the Index.
- Named in passing, not marked: "cryptology" (11.1, kept in the Cryptography quote as another name), "plaintext", "filler" (11.1), "linear algebra", "matrix" (11.2), "padding" (11.6), "El-Gamal system" (11.7; the Index subentry "encryption method, El-Gamal" links only Exercise 11.8.12, which has no page), "threshold scheme" (a footnote in 11.7).

## Chapter 12 Some Theory Behind Cryptography (done 2026-10-30)

| Term | Section | Where the book defines it | Taken from | Note |
|---|---|---|---|---|
| Fermat Prime | 12.1 | subsection 12.1.1 | Index | Index entry "Fermat prime" links Definition 12.1.1, which names these numbers Fermat numbers; the subsection is titled "Fermat primes" |
| Pépin’s Test | 12.1 | subsection 12.1.1 | Index | the statement and proof are Fact 17.5.1 |
| Fermat Numbers Are Coprime | 12.1 | Proposition 12.1.4 | Index | Index subentry "Fermat numbers, primes from" |
| Mersenne Number | 12.1 | Definition 12.1.6 | Index; also marked as a defined word in the text | Index entry "Mersenne numbers" and subentry "number, Mersenne" |
| Mersenne Prime | 12.1 | Definition 12.1.6 | Index; also marked as a defined word in the text | Index entry "Mersenne primes" first links the start of subsection 12.1.3 |
| Great Internet Mersenne Prime Search | 12.1 | Historical remark 12.1.7 | Index | Index entry "GIMPS" |
| Hardware Bugs Found Using Number Theory | 12.1 | Historical remark 12.1.8 | Index | the name is the Index entry; the remark goes on to the bug GIMPS found in an Intel chip |
| Lucas-Lehmer Test | 12.1 | Algorithm 12.1.9 | Index |  |
| Mersenne Numbers Are Coprime | 12.1 | Proposition 12.1.11 | Index | Index subentry "Mersenne numbers, primes from" |
| Base a Test | 12.2 | Definition 12.2.3 | Index; also marked as a defined word in the text |  |
| Pseudoprime | 12.2 | Definition 12.2.5 | Index; also marked as a defined word in the text |  |
| Carmichael Number | 12.2 | Definition 12.2.9 | Index; also marked as a defined word in the text |  |
| Korselt’s Theorem | 12.2 | Proposition 12.2.10 | Index | Index subentry "Carmichael numbers, characterization of" |
| The Square Root of Fermat’s Little Theorem | 12.3 | Theorem 12.3.2 | Index | Index subentry "Fermat’s little theorem, square root of" |
| Miller’s Test Base a | 12.3 | subsection 12.3.2 | Index; also marked as a defined word in the text | Index entry "Miller’s test base a" links Algorithm 12.3.3, which gives the steps |
| Strong Pseudoprime | 12.4 | Definition 12.4.1 | Index; also marked as a defined word in the text |  |
| Infinitely Many Pseudoprimes | 12.4 | Corollary 12.4.4 | Index | the name is the Index subentry "pseudoprime, infinitely many", which links Corollary 12.4.3 just before it |
| Miller-Rabin Primality Test | 12.4 | Algorithm 12.4.7 | Index | Index entry "Miller-Rabin test for primality"; the title is "Miller-Rabin (probabilistic) primality test" |
| Certificate of Primality | 12.4 | section 12.4 | Index; also marked as a defined word in the text |  |
| Factorization in Cryptography | 12.5 | section 12.5 | Index; also marked as a defined word in the text | Index subentry "factorization, in cryptography"; factorization itself is placed at 6.3 |
| Trial Division | 12.5 | subsection 12.5.2 | Index; also marked as a defined word in the text | "trial factorization" is another name in the same sentence and the title of Algorithm 12.5.6, which Index subentry "trial division, algorithm" links |
| Fermat Factorization | 12.5 | Algorithm 12.5.9 | Index | Index entry "Fermat factorization" and subentry "factorization, Fermat"; the title is "The Fermat factorization algorithm" |
| Continued Fraction | 12.6 | section 12.6 | Index; also marked as a defined word in the text | the book gives no definition here; Exercises 12.7.13 to 12.7.15 investigate it |
| Number Field | 12.6 | section 12.6 | Index; also marked as a defined word in the text | the book gives no definition here; Exercises 12.7.13 to 12.7.15 investigate it |
| Shor’s Algorithm | 12.6 | section 12.6 | Index | Index subentry "factorization, Shor’s algorithm"; the name is in italics in the text |
| Pollard Rho Factoring Algorithm | 12.6 | Algorithm 12.6.3 | Index | Index entry "Pollard rho factorization" and subentry "factorization, Pollard rho"; Remark 12.6.5 explains the name (the Greek letter rho) |
| @interact | 12.6 | Sage note 12.6.8 | Index | Index subentry "Sage, interacts" links the same note |

Titled results linked by the Index are rows (Propositions 12.1.4, 12.1.11 and 12.2.10, Theorem 12.3.2, Algorithms 12.1.9, 12.4.7, 12.5.9 and 12.6.3). The untitled Corollary 12.4.4 is a row because the Index names it ("pseudoprime, infinitely many"). Index main entries that name a project or topic in a Historical remark ("GIMPS", "hardware bugs found using number theory") are rows. "continued fraction" and "number field" are marked in the text without a definition. The chapter page defines no terms.

Left out:

- "Fermat numbers" (Definition 12.1.1, a defined word): the Index entry's first link is subsection 11.5.1, where it is placed; Definition 12.1.1 is where the book defines it.
- "factorization" as a defined word (12.5): placed at 6.3; its new setting is the row "Factorization in Cryptography".
- "Fermat numbers, factoring" (Historical remark 12.6.7, Factoring Fermat): a historical account of a term already placed.
- "Fermat’s little theorem, visualization" and "visualization, Fermat’s little theorem" (12.2, 12.3): figures for a term placed at 7.5.
- "divisor, use in Pollard rho" (12.6) and "twin primes, and Fermat factorization" (Example 12.5.10): a use and an example; twin primes are placed with their own entry at 22.3.
- "elliptic curves, cryptographic applications" (12.6, Lenstra’s elliptic curve method): first link at 11.5.
- Mersenne (Historical remark 12.1.5), Carmichael, Miller, Rabin, Pollard, Brent, Shor: people.
- Algorithm 12.6.1 (Generic routine for “random” factoring): titled but not in the Index.
- Untitled results not named by the Index: Lemma 12.1.2, Facts 12.2.2, 12.2.7, 12.2.8, 12.5.3 and 12.5.7, Theorems 12.4.2 and 12.4.6, Corollary 12.4.3, Remarks 12.2.6, 12.5.8 and 12.6.5; examples and questions.
- Sage notes 12.4.8, 12.5.2 and 12.5.5: not in the Index.
- Named in passing, not marked and not in the Index: "probable prime" (12.4), "Monte Carlo" (12.6), "quantum computer" (12.6), "Cunningham Project" (12.6), "p-1 method" (Remark 12.6.5).

## Chapter 13 Sums of Squares (done 2026-10-30)

| Term | Section | Where the book defines it | Taken from | Note |
|---|---|---|---|---|
| Sums of Squares | 13 | chapter 13 | Index | Index entry "sums of squares" links the chapter page; the quote is the chapter summary; named like the chapter, so its quote fills the chapter row of the Glossary and the figure shows no separate box |
| try/except | 13.1 | Sage note 13.1.3 | Index |  |
| Brahmagupta-Fibonacci Identity | 13.1 | Fact 13.1.7 | Index | titled; the Index entries "Brahmagupta" and "Fibonacci" (people) link the passage around it |
| Essentially Different | 13.2 | section 13.2 | marked as a defined word in the text; not in the Index | marked in the text and not in the Index; the two ways compared are $25=5^2+0^2=3^2+4^2$ |
| Square Root Modulo n | 13.3 | Definition 13.3.1 | Index; also marked as a defined word in the text |  |
| Ideal Class Group | 13.3 | Remark 13.3.4 | Index; also marked as a defined word in the text | Index subentry "group, ideal class" |
| Class Number | 13.3 | Remark 13.3.4 | Index | the name is used later in the remark: "The class number being greater than one is closely related to the factorization question raised in Exercise 6.6.30" |
| Primes as Sum of Squares | 13.4 | Theorem 13.4.5 | Index | the name is the Index subentry "sums of squares, primes as", which links the section; named like its section, so its quote fills the section row of the Glossary and the figures show no separate box |
| Minkowski’s Theorem | 13.4 | Remark 13.4.1 | Index | the theorem is not stated in the book |
| General Lattice | 13.4 | Remark 13.4.3 | Index; also marked as a defined word in the text | Index subentry "lattice, general"; the integer lattice is placed at 3.2 |
| Norm | 13.4 | Definition 13.4.4 | Index; also marked as a defined word in the text |  |
| Sublattice | 13.4 | subsection 13.4.3 | Index; also marked as a defined word in the text | Index subentry "lattice, sublattice" |
| Fundamental Region | 13.4 | subsection 13.4.4 | Index; also marked as a defined word in the text |  |
| Repeated Points | 13.4 | Definition 13.4.10 | definition box; not in the Index | a definition box the Index misses, added; the book words it as points being “repeated” |
| Full Statement on Sums of Squares | 13.5 | Theorem 13.5.5 | Index | the name is the Index subentry "sums of squares, full statement"; the theorem is untitled |
| A One-Sentence Proof | 13.6 | section 13.6 | Index | Index subentry "sums of squares, Zagier one-sentence proof"; it is Proposition 13.6.1, A One-Sentence Proof that Every Prime $p\equiv 1$ (mod $4$) is a Sum of Two Squares; named like its section, so its quote fills the section row of the Glossary and the figures show no separate box |

The untitled Theorems 13.4.5 and 13.5.5 are rows because the Index names them ("sums of squares, primes as"; "sums of squares, full statement"). Proposition 13.6.1 is titled and Index-linked ("sums of squares, Zagier one-sentence proof"); its quote is the sentence introducing it, since the proof is one long display. "essentially different" (13.2) is marked in the text and missed by the Index; Definition 13.4.10 is a definition box the Index misses. Three terms share a name with their chapter or section (Sums of Squares, Primes as Sum of Squares, A One-Sentence Proof), so section 13.6 shows an empty frame in the chapter figure.

Left out:

- Girard, Euler, Fermat (Historical remarks 13.0.2 to 13.0.4), Brahmagupta, Fibonacci (Historical remark 13.1.8), Minkowski (Historical remark 13.4.16), Zagier: people.
- "sums of squares, visualization" and "visualization, sums of squares" (subsection 13.1.2): a figure for a term placed on the chapter page.
- "Lagrange’s theorem, vindicated" (section 13.3, the formula for the square roots of $-1$): a use of the term placed at 7.4.
- "factorial" and "factorization, non-unique" (13.3): first links in other chapters.
- Untitled results not named by the Index: Facts 13.1.1, 13.1.2, 13.1.9, 13.2.1, 13.3.2 and 13.4.9, Proposition 13.2.4, Lemmas 13.3.3, 13.5.1 and 13.5.3, Claims 13.4.11 and 13.4.12, Remarks 13.1.4, 13.2.3 and 13.4.1; examples and questions.
- Sage note 13.4.15: not in the Index; the two squares command (13.1) is in a Sage cell and not in the Index.
- Named in passing, not marked and not in the Index: "Lagrange’s four square theorem" (Historical remark 13.4.16), "involution", "fixed point" (13.6), "Euler’s factorization method" (Remark 13.2.3, a link only).

## Chapter 14 Beyond Sums of Squares (done 2026-10-30)

| Term | Section | Where the book defines it | Taken from | Note |
|---|---|---|---|---|
| Gaussian Integers | 14.1 | Definition 14.1.2 | Index; also marked as a defined word in the text | Index subentries "integers, Gaussian" and "Gauss, Gaussian integers" |
| Complex Numbers | 14.1 | Definition 14.1.2 | Index; also marked as a defined word in the text | Index subentry "numbers, complex"; the book gives no more definition than this |
| Gaussian Prime | 14.1 | Fact 14.1.5 | Index; also marked as a defined word in the text | Index subentry "prime, Gaussian"; the three forms follow in the fact |
| Associates | 14.1 | subsection 14.1.2 | Index; also marked as a defined word in the text | the book gives no definition; the end of the subsection names $\pm 1$ and $\pm i$ as the possible stopping points of the Euclidean algorithm |
| Unique Factorization | 14.1 | subsection 14.1.2 | Index; also marked as a defined word in the text | Index subentries "factorization, in Gaussian integers" and "integers, unique factorization"; for the integers it is the Fundamental Theorem of Arithmetic at 6.3 |
| Group Operation on Pythagorean Triples | 14.1 | Remark 14.1.9 | Index | the name is the Index subentry "Pythagorean triple, group operation"; the remark is untitled |
| Sums of Three Squares | 14.2 | Fact 14.2.1 | Index | Index subentry "sums of squares, more than two squares" links the subsection |
| Lagrange’s Four Square Theorem | 14.2 | Fact 14.2.2 | Index | titled; Index entry "quaternions" links its proof |
| Quaternions | 14.2 | Fact 14.2.2 | Index; also marked as a defined word in the text | marked in the proof of Fact 14.2.2 |
| Waring’s Problem | 14.2 | subsection 14.2.3 | Index; also marked as a defined word in the text |  |
| Hilbert-Waring Theorem | 14.2 | Fact 14.2.8 | Index | titled; Index entry "Waring’s Problem" links it |

Facts 14.2.1, 14.2.2 and 14.2.8 are titled and Index-linked. The untitled Remark 14.1.9 is a row because the Index names it ("Pythagorean triple, group operation"). "complex numbers", "associates", "unique factorization" and "quaternions" are marked in the text with little or no definition. The chapter page and section 14.3 define no terms; 14.3 keeps an empty frame.

Left out:

- Fermat’s Last Theorem (Fact 14.2.7): the Index entry's first link is at 3.4, where it is placed.
- "Germain primes, and Fermat’s Last Theorem" and "elliptic curves, use in proving Fermat’s Last Theorem" (subsection 14.2.2): uses of terms placed at 11.6 and 11.5.
- "integer lattice, as complex numbers" (subsection 14.1.1, Figure 14.1.4): a picture of the Gaussian integers on the integer lattice placed at 3.2.
- "ring, of integers (hint of)" (Definition 14.1.2): only a hint, the ring of integers is not named in the text.
- "prime, visualization" and "visualization, Gaussian primes" (Figure 14.1.6): a figure for Gaussian primes.
- "Euclidean algorithm", "norm", "factorization, unique", "ring, example of unique factorization domain" and "sums of squares" (14.1): first links in other chapters.
- Gauss (Historical remark 14.1.3), Euler’s son Johann Albrecht, Bachet, Dickson, Wiles, Taylor, Waring, Hilbert: people.
- Untitled results not named by the Index: Facts 14.1.5 (kept for its defined word), 14.1.8 and 14.3.1; examples and questions.
- Named in passing, not marked and not in the Index: "ring theory" (14.1), "algebraic number theory" (14.2), "$r_k(n)$" and "$g(m)$", "$G(m)$" (14.2, notation without a name).

## Chapter 15 Points on Curves (done 2026-10-30)

| Term | Section | Where the book defines it | Taken from | Note |
|---|---|---|---|---|
| Rational Points on Conics | 15.1 | Fact 15.1.5 | Index | the name is the Index subentry "points, rational on conics", which links the section; the fact is untitled; named like its section, so its quote fills the section row of the Glossary and the figures show no separate box |
| Parametrization | 15.1 | subsection 15.1.1 | Index; also marked as a defined word in the text | the description is the point $\left(\frac{t^2-1}{t^2+1},\frac{-2t}{t^2+1}\right)$ for each rational slope $t$ (Fact 15.1.2) |
| Mordell Equation Has Finitely Many Integer Points | 15.3 | section 15.3 | Index | the name is the Index subentry "Mordell equation, finitely many integer points"; the Mordell equation $x^3=y^2+k$ is placed at 3.5 |
| Fields Medal | 15.3 | section 15.3 | Index | the book gives no definition; it names the award only here |
| Euler’s ‘Proof’ of the Bachet Equation | 15.3 | Fact 15.3.5 | Index | the name is the Index subentry "Bachet equation, Euler’s ‘proof’ of"; the fact is untitled, and Euler only nearly proves it; the Bachet equation $x^3=y^2+2$ is placed at 3.5 |
| Mordell’s Theorem | 15.3 | Theorem 15.3.6 | Index | Index subentries "Mordell equation, rational points" and "elliptic curves, Mordell’s theorem on rational points" |
| Quadratic Forms | 15.4 | subsection 15.4.1 | Index; also marked as a defined word in the text | the forms compared are $x^2+y^2$ and $x^2+2y^2$, each written as a row vector times a matrix times a column vector; Gauss generalized them to $ax^2+2bxy+cy^2$ |
| Adding Points | 15.5 | Algorithm 15.5.1 | Index; also marked as a defined word in the text | Index subentry "points, adding"; the algorithm is titled "Getting New Rational Points" |
| Doubling a Point | 15.5 | Algorithm 15.5.1 | Index; also marked as a defined word in the text | Index subentry "points, doubling"; the algorithm is titled "Getting New Rational Points" |
| Pell’s Equation | 15.5 | subsection 15.5.1 | Index; also marked as a defined word in the text | the hyperbolas are $x^2-dy^2=1$ (subsection 15.5.1) |
| Stigler’s Law of Eponymy | 15.5 | Historical remark 15.5.7 | Index | "Boyer’s law" is another name in the same sentence; the remark is titled "Stigler’s Law" |

Untitled results the Index names are rows: Fact 15.1.5 ("points, rational on conics"), Fact 15.3.5 ("Bachet equation, Euler’s ‘proof’ of") and the statement in section 15.3 that a Mordell equation has finitely many integer points ("Mordell equation, finitely many integer points"). Theorem 15.3.6 is titled and Index-linked. "Fields Medal" and "Stigler’s law of eponymy" are Index main entries and rows. The defined words "adding" and "doubling" are the two strategies of Algorithm 15.5.1 (Getting New Rational Points), so the algorithm has no row of its own. The chapter page and sections 15.2 and 15.6 define no terms; 15.2 and 15.6 keep empty frames.

Left out:

- "Diophantine equations, higher-order" (chapter page): a use of the term placed at 3.1; the text names no new kind of equation.
- "Bachet equation", "Mordell equation" and "Mordell equation, special cases" (Theorem 15.3.4): first links at 3.5, where they are placed.
- "elliptic curves, Mordell curves as special case" (15.3): a remark that Mordell curves are elliptic curves; elliptic curves are placed at 11.5.
- "group, Abelian" (Fact 15.5.2), "factorization, unique", "ring, example of unique factorization domain", "ring, of integers (hint of)", "conjecture, Catalan’s": first links in other chapters.
- Dudeney (15.2), Mordell (Historical remark 15.3.2), Brahmagupta (Historical remark 15.5.6, and "Brahmagupta, quote about mathematicians" in 15.6), Faltings, Pell, Boyer, Stigler: people.
- Untitled results not named by the Index: Facts 15.1.2, 15.1.8, 15.3.3, 15.5.2, 15.6.2 and 15.6.4, Theorem 15.3.4, Proposition 15.6.1, Remark 15.1.3; examples and questions.
- Named in passing, not marked and not in the Index: "conic section", "ellipse", "parabola", "hyperbola", "secant", "tangent", "field theory", "algebraic number theory", "Mordell curve" (the section title; the equation is placed at 3.5).

## Chapter 16 Solving Quadratic Congruences (done 2026-10-30)

| Term | Section | Where the book defines it | Taken from | Note |
|---|---|---|---|---|
| Quadratic Congruences | 16 | chapter 16 | Index; also marked as a defined word in the text | Index subentry "congruences, quadratic"; the form is $ax^2+bx+c\equiv 0$ (mod $n$), given later on the chapter page |
| Quadratic Formula | 16 | chapter 16 | Index | "this" is the quadratic equation $ax^2+bx+c=0$ |
| Solving Polynomial Congruences | 16.1 | Algorithm 16.1.5 | Index | the name is the Index subentries "Hensel’s lemma, for solving polynomial congruences" and "Chinese remainder theorem, for solving polynomial congruences"; the second bullet combines solutions modulo coprime $p$ and $q$ into one modulo $pq$; the algorithm is untitled |
| solve_mod | 16.2 | Sage note 16.2.2 | Index | the command first appears in section 16.2: "The Sage function solve_mod works, if a little naively" |
| Completing the Square | 16.2 | Algorithm 16.2.4 | Index | the title is "Completing the square modulo n"; the steps end with $(2ax+b)^2\equiv b^2-4ac$ |
| Quadratic Residue | 16.3 | Definition 16.3.1 | Index; also marked as a defined word in the text | "QR" is the abbreviation in the same sentence |
| Quadratic Nonresidue | 16.3 | Definition 16.3.1 | Index; also marked as a defined word in the text |  |
| quadratic_residues | 16.3 | Sage note 16.3.3 | Index | "these" are quadratic residues; the command is in the Sage cell after the sentence |
| Group of Quadratic Residues | 16.4 | Definition 16.4.2 | Index; also marked as a defined word in the text | Index subentry "quadratic residue, group" |
| Quadratic Residues Form a Group | 16.4 | Theorem 16.4.3 | Index | the name is the title of subsection 16.4.1; Index subentry "units, quadratic residues subgroup of"; the theorem is untitled |
| Quotient Group | 16.4 | Remark 16.4.4 | Index; also marked as a defined word in the text | Index subentries "group, quotient" and "units, quadratic residues quotient group of"; the book gives no definition |
| Legendre Symbol Is Multiplicative | 16.4 | Proposition 16.4.7 | Index | the name is the Index subentries "Legendre symbol, multiplicative" and "multiplicative function, Legendre symbol as"; the proposition is untitled and comes before the symbol is defined in 16.6 |
| Euler’s Criterion | 16.5 | Theorem 16.5.2 | Index | Index subentries "Euler’s criterion, for quadratic residues" and "quadratic residue, Euler criterion"; named like its section, so its quote fills the section row of the Glossary and the figures show no separate box |
| Reify | 16.6 | section 16.6 | Index | Index entry "reify"; the book quotes Steven H. Weintraub [E.7.5] |
| Legendre Symbol | 16.6 | Definition 16.6.1 | Index; also marked as a defined word in the text | marked in the paragraph before the definition; Index subentry "Legendre, quadratic residues" |
| legendre_symbol | 16.6 | section 16.6 | Index | the command is in the Sage cell after the sentence |
| Group Homomorphism | 16.6 | Remark 16.6.4 | Index; also marked as a defined word in the text | Index subentry "group, homomorphism"; the book gives no general definition |
| When Two is a Quadratic Residue | 16.7 | Theorem 16.7.1 | Index | Index subentry "Legendre symbol, via Euler’s criterion" |

Untitled results the Index names are rows: Algorithm 16.1.5 ("for solving polynomial congruences"), Theorem 16.4.3 (named by the title of subsection 16.4.1, with Index subentry "units, quadratic residues subgroup of") and Proposition 16.4.7 ("Legendre symbol, multiplicative"). Algorithm 16.2.4 and Theorems 16.5.2 and 16.7.1 are titled and Index-linked. "reify" is an Index entry for a word in the book's quotation of Weintraub. Sage commands linked by the Index (solve_mod, quadratic_residues, legendre_symbol) quote the sentence the Index links. "quotient group" and "group homomorphism" are marked without a definition.

Left out:

- "primitive root" (marked again in 16.4), "factorial", "tuple", "numbers, complex", "Hensel’s lemma, quadratic example": first links in other chapters.
- Legendre (Historical remark 16.4.1), Lagrange (Historical remark 16.3.7), "Euler, and quadratic residues", "Lagrange, and quadratic residues" (subsection 16.3.3), Weintraub: people and history.
- "quadratic residue, visualization" and "visualization, quadratic residue" (Figure 16.4.10): a figure for terms placed here.
- Untitled results not named by the Index: Facts 16.1.1, 16.1.2, 16.2.5 and 16.4.5, Remarks 16.3.2 and 16.6.4 (kept for its defined word); examples and questions.
- Named in passing, not marked and not in the Index: "Quadratic Reciprocity" (chapter page, the subject of chapter 17), "quadratic equation", "residues" (Remark 16.3.2), "subgroup", "kernel" (16.4, 16.6), "divmod".

## Chapter 17 Quadratic Reciprocity (done 2026-10-30)

| Term | Section | Where the book defines it | Taken from | Note |
|---|---|---|---|---|
| Eisenstein’s Criterion for the Legendre Symbol | 17.2 | Theorem 17.2.8 | Index | Index subentries "Eisenstein criterion, for quadratic residues", "Legendre symbol, via Eisenstein" and "quadratic residue, Eisenstein criterion" |
| Quadratic Reciprocity | 17.4 | Theorem 17.4.1 | Index | also the chapter title; the proof is section 17.6; named like its section, so its quote fills the section row of the Glossary and the figures show no separate box |
| Alternate Form of Quadratic Reciprocity | 17.4 | Remark 17.4.2 | Index | the name is the Index subentry "quadratic reciprocity, alternate form"; the remark is untitled |
| Computation of the Legendre Symbol | 17.4 | Algorithm 17.4.6 | Index | the name is the Index subentry "Legendre symbol, computation"; the algorithm is untitled |
| Jacobi Symbol | 17.4 | Definition 17.4.9 | Index; also marked as a defined word in the text | the product is $\left(\frac{a}{p_1}\right)^{e_1}\cdots\left(\frac{a}{p_k}\right)^{e_k}$ |
| Kronecker Symbol | 17.4 | Sage note 17.4.11 | Index | "this" is the Jacobi symbol; the book gives no definition |
| kronecker_symbol | 17.4 | Sage note 17.4.11 | Index | the command is in the Sage cell after the sentence |
| Goldwasser-Micali Cryptosystem | 17.5 | subsection 17.5.3 | Index | Index subentry "encryption method, Goldwasser-Micali" |
| Artin’s Conjecture | 17.5 | Conjecture 17.5.3 | Index | Index subentry "conjecture, Artin’s" |

Theorems 17.2.8 and 17.4.1 and Conjecture 17.5.3 are titled and Index-linked. Untitled results the Index names are rows: Remark 17.4.2 ("quadratic reciprocity, alternate form") and Algorithm 17.4.6 ("Legendre symbol, computation"). The Kronecker symbol and its Sage command share Sage note 17.4.11, the sentence the Index links. The chapter page and sections 17.1, 17.3 and 17.6 define no terms; they keep empty frames.

Left out:

- Pépin’s test (Fact 17.5.1, and "Fermat numbers, Pépin’s test for primality"): the Index entry's first link is at 12.1, where it is placed; Fact 17.5.1 states and proves it.
- "quadratic reciprocity, meaning" (subsubsection 17.4.2.1), "many proofs", "applications of", "factoring", "primality testing", "cryptography" and "proof of" (17.4 to 17.6): explanations, uses and the proof of the theorem placed at 17.4.
- "Legendre symbol, as checking parity", "parity, big problems reduce to checking" (Remark 17.2.7), "Legendre symbol, using Jacobi symbol", "Legendre symbol, via quadratic reciprocity" (Example 17.4.3), "Eisenstein criterion, ambiguous name" (Remark 17.2.9): uses, examples and a remark on the name.
- "Germain primes, and Artin’s conjecture" (Example 17.5.4), "Germain primes, and Mersenne numbers" and "Mersenne numbers, and Germain primes" (Remark 17.5.2): an example and a remark connecting terms already placed.
- Definition 17.2.2: it defines the set $E$ and names no word.
- "Legendre symbol, multiplicative", "group, Abelian", "Mordell equation, special cases", "prime, safe", "cryptography, public-key": first links in other chapters.
- Eisenstein (Historical remark 17.2.1), Gauss, Legendre, Artin, Abel, Galois, Goldwasser, Micali, Solovay, Strassen: people.
- Untitled results not named by the Index: Propositions 17.1.1, 17.1.3 and 17.3.4, Facts 17.1.7, 17.2.6 and 17.4.10, Claims 17.2.3, 17.3.3, 17.6.2, 17.6.3 and 17.6.5, Remark 17.4.5; examples.
- Named in passing, not marked and not in the Index: "Eisenstein integers" (Historical remark 17.2.1), "Solovay-Strassen test" (17.5), "Sophie Germain prime" records (17.5).

## Chapter 18 An Introduction to Functions (done 2026-10-30)

| Term | Section | Where the book defines it | Taken from | Note |
|---|---|---|---|---|
| Arithmetic Function | 18 | chapter 18 | Index; also marked as a defined word in the text | Index subentry "function, arithmetic" |
| Multiplicative Function | 18.1 | Definition 18.1.2 | Index; also marked as a defined word in the text | Index entry "multiplicative function"; the Euler phi function is shown multiplicative in Fact 9.5.2 |
| Long-Term Average of Sums of Squares | 18.2 | Fact 18.2.9 | Index | the name is the Index subentries "sums of squares, long-term average" and "long-term average, sums of squares"; the fact is untitled |

The untitled Fact 18.2.9 is a row because the Index names it ("sums of squares, long-term average"; "long-term average, sums of squares"). "multiplicative" is defined here (Definition 18.1.2), where the Index entry "multiplicative function" first links; in 9.5 it was left out as a preview of this definition.

Left out:

- Definition 18.2.1: it defines the function $r(n)$ (the number of ways to write $n$ as a sum of two squares) and names no word; "sums of squares" has its first link in chapter 13.
- "sums of squares, insane fact concerning" (Fact 18.2.9): the same fact as the row.
- "Euler ϕ function" and "integer lattice": first links in other chapters.
- Untitled results not named by the Index: Facts 18.1.1, 18.2.3 and 18.2.8, Remark 18.0.2; examples and questions.
- Sage notes 18.2.4 and 18.2.6: not in the Index.
- Named in passing, not marked and not in the Index: "squeeze theorem" (18.2), "asymptotes" (18.1).

## Chapter 19 Counting and Summing Divisors (done 2026-10-30)

| Term | Section | Where the book defines it | Taken from | Note |
|---|---|---|---|---|
| Sum of Divisors Functions | 19.1 | Definition 19.1.1 | Index | Index entry "sum of divisors functions"; Remark 19.1.2 notes that $\sigma_0(n)$ is often written $\tau(n)$ or $d(n)$, and $\sigma_1(n)$ simply $\sigma(n)$ |
| sigma | 19.2 | Sage note 19.2.2 | Index | the command is in the Sage cell after the sentence; without a second argument it computes $\sigma_1=\sigma$ |
| Multiplicative Function Preserved by Summation | 19.2 | Theorem 19.2.7 | Index | the name is the Index subentry "multiplicative function, preserved by summation"; the theorem is untitled |
| Unit Function | 19.2 | Definition 19.2.9 | Index | Index subentry "function, unit"; the name is in italics |
| Identity Function | 19.2 | Definition 19.2.9 | Index | Index subentry "function, identity"; the name is in italics |
| Perfect Number | 19.4 | Definition 19.4.1 | Index; also marked as a defined word in the text | Index entry "perfect numbers" |
| Aliquot Parts | 19.4 | subsection 19.4.1 | marked as a defined word in a footnote; not in the Index | the name is the footnote on "proper divisors": "Historically these were called **aliquot parts** in this context." |
| Characterization of Even Perfect Numbers | 19.4 | Theorem 19.4.3 | Index | Index subentry "perfect numbers, characterization of even" |
| k-Perfect | 19.4 | Definition 19.4.4 | Index; also marked as a defined word in the text | Index subentry "number, k-perfect" |
| Abundant | 19.4 | Definition 19.4.4 | Index; also marked as a defined word in the text | Index subentry "number, abundant" |
| Deficient | 19.4 | Definition 19.4.4 | Index; also marked as a defined word in the text | Index subentry "number, deficient" |
| Pseudoperfect | 19.4 | Definition 19.4.5 | Index; also marked as a defined word in the text | Index subentry "number, pseudoperfect" |
| Superabundant | 19.4 | Definition 19.4.5 | Index; also marked as a defined word in the text | Index subentry "number, superabundant" |
| Weird | 19.4 | Definition 19.4.5 | Index; also marked as a defined word in the text | Index subentry "number, weird" |
| Abundancy Index | 19.4 | Definition 19.4.7 | Index; also marked as a defined word in the text | Fact 19.4.9 shows it equals $\sigma_{-1}(n)$ |
| Abundancy Outlaws | 19.4 | subsection 19.4.3 | Index; also marked as a defined word in the text |  |
| Amicable Numbers | 19.4 | Definition 19.4.11 | Index; also marked as a defined word in the text | Index entry "amicable numbers" |
| Get Amicable Numbers | 19.4 | Algorithm 19.4.14 | Index | Index subentry "amicable numbers, algorithm"; the formula is due to Thabit ibn Qurra (Historical remark 19.4.13) |
| Odd Perfect Numbers | 19.5 | Question 19.5.1 | Index | the name is the Index subentry "perfect numbers, odd"; named like its section, so its quote fills the section row of the Glossary and the figures show no separate box |
| Abundancy Index and Odd Perfect Numbers | 19.5 | Theorem 19.5.4 | Index | the name is the Index subentries "abundancy index, and odd perfect numbers" and "perfect numbers, and abundancy index"; the theorem is untitled and due to P. Weiner |
| Currently Known Criteria for Odd Perfect Numbers | 19.5 | Fact 19.5.5 | Index | the name is the Index subentry "perfect numbers, currently known criteria"; the fact goes on: at least 101 prime factors, at least 10 distinct ones, a largest prime factor at least $10^8$, and more; it is untitled |

Untitled results the Index names are rows: Theorem 19.2.7 ("multiplicative function, preserved by summation"), Theorem 19.5.4 ("abundancy index, and odd perfect numbers") and Fact 19.5.5 ("perfect numbers, currently known criteria"). Question 19.5.1 is a row because the Index names its concept ("perfect numbers, odd"); it shares its name with section 19.5. Theorem 19.4.3 and Algorithm 19.4.14 are titled and Index-linked. "aliquot parts" is marked in a footnote and missed by the Index; its quote is the sentence the footnote hangs on. The chapter page and section 19.3 define no terms; 19.3 keeps an empty frame.

Left out:

- Theorem 19.4.2 (Euclid’s half of the even perfect numbers) and the Index subentries "Euclid’s Elements, perfect numbers", "perfect numbers, in Euclid’s Elements", "perfect numbers, and Mersenne primes" and "Mersenne primes, in perfect numbers" (subsection 19.4.1): the history around it; the theorem is untitled and folded into Theorem 19.4.3.
- Theorem 19.5.2 (Odd perfect numbers aren’t simple): titled but not in the Index.
- "Mersenne, and amicable numbers" (Figure 19.4.12): a picture.
- Thabit ibn Qurra (Historical remark 19.4.13), Yazdi, Euclid, Nichomachus, Holdener, Stanton, Weiner: people.
- "divisor, proper" (19.4): first link in another chapter.
- Principle 19.2.6: untitled and not in the Index.
- Untitled results not named by the Index: Facts 19.2.3, 19.2.4, 19.3.2, 19.4.9 and 19.4.10, Theorem 19.2.5, Corollary 19.2.8, Lemma 19.5.3, Proposition 19.5.6, Remarks 19.1.2 (the notations $\tau$ and $\sigma$, kept in a note) and 19.2.1; examples and questions.
- Named in passing, not marked and not in the Index: "geometric summation formula" (19.2), "complete number" (19.4).

## Chapter 20 Long-Term Function Behavior (done 2026-10-30)

| Term | Section | Where the book defines it | Taken from | Note |
|---|---|---|---|---|
| Big Oh | 20.1 | Definition 20.1.2 | Index | titled "Big Oh" |
| Landau Notation | 20.1 | Definition 20.1.2 | Index; also marked as a defined word in the text |  |
| Natural Logarithm | 20.3 | Definition 20.3.3 | Index | Index subentry "logarithm, natural" |
| Long-Term Average of Sum of Divisors Functions | 20.3 | Fact 20.3.5 | Index | the name is the Index subentries "long-term average, sum of divisors functions" and "sum of divisors functions, long-term average"; the fact is untitled, and the section goes on to show the average of $\tau$ is $\log(n)+2\gamma-1$ up to a small error |
| Harmonic Series | 20.3 | subsection 20.3.3 | Index; also marked as a defined word in the text |  |
| Euler-Mascheroni Constant | 20.3 | Definition 20.3.10 | Index | Remark 20.3.11 adds that $\gamma$ is not known to be either rational or irrational (Index subentries "Euler-Mascheroni constant, ir/rationality unknown" and "irrational number, γ status unknown") |
| Gamma Function | 20.3 | Remark 20.3.11 | Index | Index subentry "function, Gamma"; the book gives no more definition |

Definition 20.1.2 is titled ("Big Oh") and names "Landau notation", so it gives two rows. The untitled Fact 20.3.5 is a row because the Index names it ("long-term average, sum of divisors functions"). "Gamma" is an Index subentry ("function, Gamma") in Remark 20.3.11 and is a row although the book gives no definition. The chapter page and sections 20.2, 20.4 and 20.5 define no terms; they keep empty frames.

Left out:

- "greatest integer function, use in estimating number of divisors" (subsection 20.2.2): a use of a term placed in an earlier chapter.
- "Euler-Mascheroni constant, ir/rationality unknown" and "irrational number, γ status unknown" (Remark 20.3.11): a fact about the constant, kept in its note.
- "integer lattice", "long-term average, sums of squares" and "sums of squares, long-term average" (Example 20.1.3): first links in other chapters.
- Landau, Euler, Mascheroni, Havil: people.
- Untitled results not named by the Index: Remark 20.3.11 (kept for "Gamma"); examples and questions.
- Sage note 20.2.2: not in the Index.
- Named in passing, not marked and not in the Index: "error term", "asymptote" (20.1 to 20.3), "divergent series" (20.3).

## Chapter 21 The Prime Counting Function (done 2026-10-30)

| Term | Section | Where the book defines it | Taken from | Note |
|---|---|---|---|---|
| Prime Counting Function | 21 | Definition 21.0.1 | Index; also marked as a defined word in the text | Index entry "prime counting function π(x)"; named like the chapter, so its quote fills the chapter row of the Glossary and the figure shows no separate box |
| prime_pi | 21.1 | Sage note 21.1.2 | Index |  |
| Cython | 21.1 | Sage note 21.1.3 | Index |  |
| Asymptotic | 21.2 | Definition 21.2.1 | Index; also marked as a defined word in the text | Index entry "asympotic" (so spelled) |
| Probability Density Function | 21.2 | subsection 21.2.1 | Index; also marked as a defined word in the text | Index subentry "function, probability density" |
| Logarithmic Integral | 21.2 | Definition 21.2.2 | Index; also marked as a defined word in the text |  |
| Skewes’ Number | 21.2 | Historical remark 21.2.7 | Index; also marked as a defined word in the text | the bounds are for the first time $Li(x)<\pi(x)$: Skewes proved it is no higher than $10^{10^{10^{10^{1000}}}}$, and with 34 in place of 1000 assuming the Riemann Hypothesis |
| Prime Number Theorem | 21.3 | Theorem 21.3.1 | Index | the theorem adds that also $\lim_{x\to\infty}\frac{\pi(x)}{x/\log(x)}=1$; named like its section, so its quote fills the section row of the Glossary and the figures show no separate box |
| Bertrand’s Postulate | 21.3 | Theorem 21.3.4 | Index | first proved by Chebyshev |
| Big Oh of Prime Pi | 21.3 | Theorem 21.3.6 | Index | Index subentries "Landau notation, prime counting function π(x) computation" and "prime counting function π(x), Landau (Big Oh) computation" |
| Step Function | 21.4 | subsection 21.4.1 | Index; also marked as a defined word in the text | Index subentry "function, step" |
| Chebyshev Theta Function | 21.4 | Definition 21.4.3 | Index | Index subentry "function, Chebyshev theta" |
| Prime Number Indicator Function | 21.4 | Definition 21.4.7 | definition box; not in the Index | the definition: $a(n)$ is 1 if $n$ is prime and 0 otherwise; "Another way to say this is $a(n)=\pi(n)-\pi(n-1)$." |
| Abel Summation | 21.4 | subsection 21.4.2 | marked as a defined word in a footnote; not in the Index | the name is the footnote on this sentence: "Students a little more familiar with calculus may want to compare this process to integration by parts, but in a discrete context, sometimes called **Abel summation**." |

Theorems 21.3.1, 21.3.4 and 21.3.6 are titled and Index-linked. Two terms share a name with their chapter or section once the article is set aside ("The Prime Counting Function", "The Prime Number Theorem"), so they fill those rows; the build now ignores a leading "The", "A" or "An" when it compares names. Two words the Index misses are added: the name in Definition 21.4.7 ("prime number indicator function") and "Abel summation", marked in a footnote; their quotes are the sentences the name belongs to, with the rest in the note.

Left out:

- "Riemann Hypothesis" (marked in Historical remark 21.2.7): it previews chapter 25, where the term will be placed.
- Definition 21.1.7: it defines $\phi(n,a)$ and names no word.
- "prime counting function π(x), not useful formula" (subsection 21.1.1), "prime number theorem, elementary proof" (Historical remark 21.3.2), "greatest integer function, convenience for turning functions into sums" (21.4): a formula shown not to be useful, a remark on proofs, and a use of a term placed at 3.3.
- "Gauss, letter to Encke" (Figure 21.2.4), "Gauss, prime numbers", "Legendre, prime numbers", Chebyshev (Historical remark 21.3.3), "number, Skewes’" (the same as Skewes’ number), Littlewood, Skewes, Bertrand, Hadamard, de la Vallée-Poussin, Selberg, Erdős: people, history and a duplicate entry.
- "Fields Medal": first link at 15.3.
- Untitled results not named by the Index: Facts 21.1.5, 21.2.6 and 21.3.5, Proposition 21.3.7 (the upper bound $\pi(x)<2x/\log(x)$), Lemma 21.3.9, Proposition 21.4.6; examples and questions.
- Sage notes 21.1.4 and 21.4.4: not in the Index.
- Named in passing, not marked and not in the Index: "integration by parts" (21.4), "binomial coefficient" (Lemma 21.3.9), "analytic number theory" (21.3).

## Chapter 22 More on Prime Numbers (done 2026-10-30)

| Term | Section | Where the book defines it | Taken from | Note |
|---|---|---|---|---|
| Prime Races | 22.1 | section 22.1 | Index | the name is the Index subentry "prime, races"; named like its section, so its quote fills the section row of the Glossary and the figures show no separate box |
| Dirichlet’s Theorem on Primes in an Arithmetic Progression | 22.2 | Theorem 22.2.1 | Index | Index subentry "primes, in an arithmetic progression" |
| Arithmetic Progressions of Primes | 22.2 | subsection 22.2.2 | Index | the name is the Index subentry "primes, arithmetic progressions of", which links the subsection; the question answered is Question 22.2.5, "Can find *arbitrarily long* such sequences in the primes?" |
| Zero Density | 22.2 | subsection 22.2.2 | Index; also marked as a defined word in the text | Index subentry "density, zero" |
| Positive Density | 22.2 | subsection 22.2.2 | Index; also marked as a defined word in the text | Index subentry "density, positive" |
| Primorial | 22.2 | Definition 22.2.7 | Index; also marked as a defined word in the text | read “p sharp” or “p hash” |
| Polignac’s Conjecture | 22.3 | Conjecture 22.3.2 | Index | Index subentry "conjecture, Polignac’s" |
| Twin Prime Conjecture | 22.3 | Conjecture 22.3.3 | Index | Index subentry "twin prime, conjecture" |
| Twin Primes | 22.3 | Definition 22.3.4 | Index; also marked as a defined word in the text |  |
| Twin Prime Constant | 22.3 | Remark 22.3.6 | Index; also marked as a defined word in the text | Index subentry "twin prime, constant"; the remark notes some authors leave out the factor 2 |
| Goldbach Conjecture | 22.3 | Conjecture 22.3.8 | Index | Index subentry "conjecture, Goldbach" |
| PolyMath Projects | 22.3 | Historical remark 22.3.10 | Index | the name is only in the Index; the footnote on "nature" links the Polymath wiki page "Bounded gaps between primes" |
| Brun’s Constant | 22.3 | subsection 22.3.2 | Index; also marked as a defined word in the text |  |
| Cousin Primes | 22.3 | subsection 22.3.3 | Index; also marked as a defined word in the text | Index subentry "primes, cousin" |
| Sexy Primes | 22.3 | subsection 22.3.3 | Index; also marked as a defined word in the text | Index subentry "primes, sexy" |
| Generalized Elliott-Halberstam Conjecture | 22.3 | subsection 22.3.3 | Index | Index subentry "conjecture, generalized Elliott-Halberstam"; the book does not state it |
| Prime Constellations | 22.3 | subsection 22.3.3 | Index; also marked as a defined word in the text | Index subentry "prime, constellation"; the book gives no more definition |
| Wagstaff’s Conjecture | 22.3 | subsection 22.3.3 | Index | Index subentry "conjecture, Wagstaff’s" |
| Factorial Primes | 22.3 | subsection 22.3.3 | Index; also marked as a defined word in the text | Index subentry "prime, factorial" |
| Primorial Primes | 22.3 | subsection 22.3.3 | Index; also marked as a defined word in the text | Index subentry "prime, primorial" |

Theorem 22.2.1, Remark 22.3.6 and Conjectures 22.3.2, 22.3.3 and 22.3.8 are titled or marked and Index-linked. Index subentries that name a concept are rows: "prime, races" (it shares its name with section 22.1), "primes, arithmetic progressions of" (the Green and Tao theorem answering Question 22.2.5), "conjecture, generalized Elliott-Halberstam" and "conjecture, Wagstaff’s". "PolyMath Projects" is an Index entry whose name is only in the Index; its quote is the sentence the Index links. The chapter page defines no terms.

Left out:

- Propositions 22.1.4 and 22.1.5 (Infinitude of primes 3 (mod 4); Infinitude of primes 1 mod 4): titled, but the Index entry "primes, proof of infinitude of" has its first link at 6.2.
- Conjecture 22.3.7 (Hardy and Littlewood): untitled and not in the Index.
- Dirichlet (Historical remark 22.2.2), Zhang (Historical remark 22.3.10), Chebyshev, Green, Tao, Szemerédi, Goldbach, Polignac, Brun, Wagstaff: people.
- "Euler-Mascheroni constant", "Fields Medal" and "hardware bugs found using number theory" (Historical remark 22.3.9, the Pentium bug): first links in other chapters.
- Untitled results not named by the Index: Facts 22.1.3, 22.1.6, 22.2.4 and 22.2.6; examples and questions.
- Sage note 22.3.11: not in the Index.
- Named in passing, not marked and not in the Index: "Dirichlet series" (Historical remark 22.2.2), "heuristic" (22.3).

## Chapter 23 New Functions from Old (done 2026-10-30)

| Term | Section | Where the book defines it | Taken from | Note |
|---|---|---|---|---|
| Moebius Mu Function | 23.1 | Definition 23.1.1 | Index | Index entry "Moebius μ function"; the definition is titled "Moebius mu" |
| Recursive Definition of Mu | 23.1 | Proposition 23.1.5 | Index | Index subentry "Moebius μ function, alternate definition"; the title is "Recursive definition of μ" |
| moebius | 23.1 | Sage note 23.1.6 | Index | the command is in the Sage cell after the sentence |
| Möbius Inversion Formula | 23.2 | Theorem 23.2.1 | Index | Index entry "Moebius inversion formula" |
| Dirichlet Product | 23.2 | Definition 23.2.3 | Index; also marked as a defined word in the text |  |
| Dirichlet Identity Function | 23.3 | Definition 23.3.1 | Index | the name is the Index subentry "function, Dirichlet identity"; $I$ is the identity for the Dirichlet product (Theorem 23.4.2) |
| ω(n) | 23.3 | Definition 23.3.3 | Index | Index entry "ω(n)"; the definition begins: if $n=\prod_{i=1}^k p_i^{e_i}$ |
| Liouville’s Function | 23.3 | Definition 23.3.4 | Index; also marked as a defined word in the text | Index subentry "function, Liouville" |
| Commutative Monoid | 23.4 | Definition 23.4.1 | Index; also marked as a defined word in the text | Index subentry "monoid, commutative" |
| Ring of Arithmetic Functions | 23.4 | Remark 23.4.7 | Index | the name is the Index subentry "ring, of arithmetic functions"; the book gives no definition |
| Multiplicative Function Preserved by Dirichlet Product | 23.4 | Proposition 23.4.10 | Index | the name is the Index subentry "multiplicative function, preserved by Dirichlet product"; the proposition is untitled |
| Multiplicative Function Preserved by Inversion | 23.4 | Proposition 23.4.11 | Index | the name is the Index subentry "multiplicative function, preserved by inversion"; $f^{-1}$ is the inverse under the Dirichlet product (Theorem 23.4.3); the proposition is untitled |
| Moebius Function Is Multiplicative | 23.4 | Corollary 23.4.15 | Index | the name is the Index subentries "Moebius μ function, multiplicative" and "multiplicative function, Moebius function as"; it is also stated without proof as Fact 23.1.7 |

Definitions 23.1.1 and 23.2.3, Proposition 23.1.5 and Theorem 23.2.1 are titled and Index-linked. Untitled results the Index names are rows: Propositions 23.4.10 and 23.4.11 and Corollary 23.4.15. Definition 23.3.1 (the function $I$) and Definition 23.3.3 ($\omega(n)$) take their names from the Index ("function, Dirichlet identity"; "ω(n)"). "ring, of arithmetic functions" (Remark 23.4.7) is a row although the book gives no definition. The chapter page defines no terms.

Left out:

- Theorem 23.4.3: it defines the inverse $f^{-1}$ under the Dirichlet product but is untitled and not in the Index; the inverse is named in the note on Proposition 23.4.11.
- Theorem 23.4.2 ($\star$ makes the arithmetic functions a commutative monoid), Corollaries 23.4.4 to 23.4.6, Fact 23.4.8 (a short proof of Moebius inversion): untitled and not named by the Index.
- Möbius (Historical remark 23.1.2), Liouville, Dirichlet: people; "Stigler’s law of eponymy, example" and "group, Abelian": first links in other chapters.
- Untitled results not named by the Index: Proposition 23.1.4, Facts 23.1.7 (the same as Corollary 23.4.15), 23.3.2 and 23.4.9, Lemmas 23.4.12 to 23.4.14; examples and questions.
- Named in passing, not marked and not in the Index: "idempotents", "valuations", "derivations" (Remark 23.4.7).

## Chapter 24 Infinite Sums and Products (done 2026-10-30)

| Term | Section | Where the book defines it | Taken from | Note |
|---|---|---|---|---|
| Riemann Zeta Function | 24.2 | Definition 24.2.1 | Index; also marked as a defined word in the text | Index entry "zeta function"; the definition is titled "Riemann zeta function"; for now its domain is the $s$ where the series converges; named like its section, so its quote fills the section row of the Glossary and the figures show no separate box |
| Integral Test for Series Convergence | 24.2 | Proposition 24.2.4 | Index |  |
| Dirichlet Series | 24.3 | Definition 24.3.1 | Index; also marked as a defined word in the text | the definition is purely formal, without regard to convergence |
| Euler Product | 24.3 | Definition 24.3.2 | Index; also marked as a defined word in the text | Index entry "Euler products"; for the zeta function it is $\prod_p \left(\frac{1}{1-p^{-s}}\right)$ (Example 24.3.3) |
| Special Values of the Zeta Function | 24.4 | Remark 24.4.1 | Index | the name is the Index subentry "zeta function, special values of" |
| Apéry’s Constant | 24.4 | Remark 24.4.1 | Index | Index entry "Apéry’s constant" and subentry "irrational number, Apéry’s constant" |
| Chances of Being Coprime at Random | 24.6 | subsection 24.6.1 | Index | the name is the Index subentry "coprime, chances at random"; it follows from Proposition 24.6.2, that a random integer lattice point is visible from the origin with chance $\frac{6}{\pi^2}$ |
| Prime Harmonic Series | 24.6 | Proposition 24.6.4 | Index; also marked as a defined word in the text | Index subentry "prime, harmonic series"; the proposition is titled "Prime harmonic series diverges" |
| Long-Term Average of Euler Phi | 24.6 | Proposition 24.6.7 | Index | the name is the Index subentries "Euler ϕ function, long-term average" and "long-term average, Euler ϕ function"; the proposition is untitled |

Definitions 24.2.1, 24.3.1 and 24.3.2 and Propositions 24.2.4 and 24.6.4 are titled and Index-linked; the zeta function shares its name with section 24.2 once the article is set aside, so it fills that row. Index subentries that name a concept are rows: "zeta function, special values of" and "Apéry’s constant" (Remark 24.4.1), "coprime, chances at random" (the paragraph after Proposition 24.6.2) and "Euler ϕ function, long-term average" (Proposition 24.6.7). The chapter page and sections 24.1 and 24.5 define no terms; they keep empty frames.

Left out:

- "Apéry’s constant, via Twitter" (24.6): a remark on how a result was shared.
- "harmonic series" and "primorial": first links at 20.3 and 22.2.
- Riemann (Historical remark 24.2.3), Apéry, Euler, Clarkson, Zudilin: people.
- Untitled results not named by the Index: Facts 24.1.1, 24.2.5, 24.4.2, 24.5.1 to 24.5.3 and 24.5.5, Theorems 24.4.3 and 24.5.4, Claim 24.5.6, Propositions 24.6.2 (kept in the note on the coprime row) and 24.6.3; examples and questions.
- Named in passing, not marked and not in the Index: "Bernoulli numbers" (Remark 24.4.1), "improper integral" (24.2), "Riemann sums", "Riemann surfaces" (Historical remark 24.2.3).

## Chapter 25 Further Up and Further In (done 2026-10-30)

| Term | Section | Where the book defines it | Taken from | Note |
|---|---|---|---|---|
| Von Koch’s Conjecture | 25.2 | Conjecture 25.2.2 | Index | the name is the Index subentry "conjecture, Von Koch’s"; Theorem 25.2.4 says it is equivalent to the Riemann Hypothesis |
| Riemann Hypothesis | 25.3 | Conjecture 25.3.7 | Index | Index entry "Riemann Hypothesis" and subentry "conjecture, Riemann hypothesis"; one of the seven Millennium Prize problems |
| Riemann Explicit Formula | 25.7 | Fact 25.7.1 | Index | Index entry "Riemann explicit formula for π(x)"; each $\rho$ is a zero of $\zeta$ above the real axis and $\bar{\rho}$ the one below it; named like its section, so its quote fills the section row of the Glossary and the figures show no separate box |
| Consequences of the Riemann Hypothesis | 25.7 | Fact 25.7.3 | Index | Index subentry "Riemann Hypothesis, consequences of"; the title is "Consequences of the (generalized) Riemann Hypothesis"; the consequences listed include the bound $\sigma(n)<e^\gamma \log(\log(n))$ for large $n$ and a bound $O(\sqrt{p}\log(p))$ on the biggest gap between consecutive primes |

Conjecture 25.3.7 and Facts 25.7.1 and 25.7.3 are titled and Index-linked; the explicit formula shares its name with section 25.7 once the article is set aside, so it fills that row. The untitled Conjecture 25.2.2 is a row because the Index names it ("conjecture, Von Koch’s"). The Riemann Hypothesis, marked in chapter 21 as a preview, is placed here, where its Index entry links. The chapter page and sections 25.1, 25.4, 25.5, 25.6 and 25.8 define no terms; they keep empty frames.

Left out:

- Theorem 25.2.4 (Von Koch’s estimate is equivalent to the Riemann Hypothesis): untitled and not in the Index; kept in the note on Von Koch’s Conjecture.
- Definition 25.4.2: it defines the function $J(x)$ and names no word.
- "zeta function, visualization" and "visualization, Riemann zeta function" (subsection 25.3.2): figures for a term placed at 24.2.
- "Taylor series, proving Euler’s formula" (25.3) and "Taylor series, of log" (Question 25.5.1): uses of a calculus tool.
- "elliptic curves" and "Fields Medal" (25.8): first links in other chapters.
- Theorem 25.8.1 (the distribution of $r_{12}(p)$): untitled and not named by the Index.
- Von Koch, Riemann: people.
- Untitled results not named by the Index: Fact 25.4.3, Remarks 25.3.5 and 25.4.4; examples and questions.
- Sage note 25.8.2: not in the Index.
- Named in passing, not marked and not in the Index: "Millennium Prize problems" (25.3), "Sato-Tate" (25.8).
