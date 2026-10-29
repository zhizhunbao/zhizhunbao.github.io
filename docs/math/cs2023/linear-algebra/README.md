# 4. Linear Algebra: term checklist

Not built (README). Source: Austin, *Understanding Linear Algebra* (understandinglinearalgebra.org, 2023 update; CC BY 4.0), cached 2026-10-29: section pages as Markdown in `design-refs/official-docs/cache/md/understandinglinearalgebra-*` and as raw HTML in `cache/data/ula-raw/`. The earlier pages were the eight CS2023 MSF-Linear topics, with a MathWorld sentence per topic and no terms of their own; only the MathWorld row for Linear Algebra itself is kept, on the Overview.

The terms are the book's Index (94 entries), each placed in the section its entry links to and quoted from the linked element: the Definition box, or the sentence of the paragraph or item that names the term (with the sentence before it where the term's sentence cannot stand alone). Four Index entries are another name for a box already listed and are merged into it: R squared (Coefficient of determination), stationary vector (Steady-state vector), reduced row echelon matrix (Reduced row echelon form), matrix, rank (Rank). Added to the Index: the two Definition boxes it misses (2.2.10 Matrix-matrix multiplication, 7.2.14 positive definite and related), the titled results that name a concept (Augmentation Principle, Linearity of matrix multiplication, Perron-Frobenius, Projection formula, QR factorization, The Spectral Theorem, Additivity of Variance, Principal Axes Theorem, Second Derivative Test, Singular value decomposition, Reduced singular value decomposition), and the words the running text emphasizes as names of concepts.

Left out:

- Untitled propositions and theorems (they have no name). The two titled ones, 3.1.10 Properties of invertible matrices and 3.4.13 The effect of row operations on the determinant, are terms since 2026-10-29, when named results came to count as terms.
- Emphasized words named only in exercises: Vandermond matrix (3.4, the book's spelling; Vandermonde matrix is taken from 6.5), golden ratio and Gibonacci numbers (4.4), parallelogram law (6.1).
- Emphasis that is not a name: Existence and Uniqueness (labels of the two questions in 1.4), Sage instructions (Evaluate, Enter, Shift, arguments), and stress on ordinary words (really, almost, every, uniquely, left, right, clockwise, positively, negatively, column, rows, nonzero).
- Example names and a book title: Chutes and Ladders (4.5), the second Rehnquist court and swing vote (7.5), *An Introduction to Statistical Learning* (6.5).
- The chapter 6 introduction emphasizes "least squares"; its terms are those of 6.5 (Orthogonal least squares, Least-squares problem, Least-squares approximate solution).

The Index has two misspellings: "othonormal set" (Orthonormal set) and "Moore-Penrose psuedoinverse" (the defining sentence spells it the same way and is quoted as written).

CS2023's topic "Linear combinations of polynomials, Bezier curves" is not in the book; it is page 8 Bézier Curves, from MathWorld.

## Chapter 1 Systems of Equations

| Term | Section | Where the book defines it | Taken from | Note |
|---|---|---|---|---|
| Linear Equation | 1.1 | Definition 1.1.13 | Index |  |
| Linear System | 1.1 | Definition 1.1.13 | Index |  |
| Solution | 1.1 | Definition 1.1.14 | Index |  |
| Solution Space | 1.1 | Definition 1.1.15 | Index |  |
| Coefficient | 1.1 | section 1.1 | emphasized in the text (not in the Index) |  |
| Variable | 1.1 | section 1.1 | emphasized in the text (not in the Index) |  |
| Augmented Matrix | 1.2 | section 1.2 | Index |  |
| Back Substitution | 1.2 | Observation 1.2.3 | Index |  |
| Basic Variable | 1.2 | section 1.2 | Index |  |
| Coefficient Matrix | 1.2 | section 1.2 | Index |  |
| Decoupled System | 1.2 | Observation 1.2.2 | Index |  |
| Free Variable | 1.2 | section 1.2 | Index |  |
| Gaussian Elimination | 1.2 | section 1.2 | Index |  |
| Parametric Description | 1.2 | section 1.2 | Index |  |
| Reduced Row Echelon Form | 1.2 | Definition 1.2.8 | Index | Index entry "reduced row echelon matrix" is the same box |
| Row Equivalent | 1.2 | section 1.2 | Index |  |
| Triangular System | 1.2 | Observation 1.2.3 | Index |  |
| Replacement | 1.2 | section 1.2 | emphasized in the text (not in the Index) |  |
| Leading Entry | 1.2 | section 1.2 | emphasized in the text (not in the Index) |  |
| Augmentation Principle | 1.3 | Proposition 1.3.3 | titled Proposition (not in the Index) |  |
| Consistent System | 1.4 | section 1.4 | Index |  |
| Inconsistent System | 1.4 | section 1.4 | Index |  |
| Pivot Position | 1.4 | Definition 1.4.1 | Index |  |
| Homogeneous System | 1.4 | section 1.4 | emphasized in the text (not in the Index) |  |

## Chapter 2 Vectors, Matrices, and Linear Combinations

| Term | Section | Where the book defines it | Taken from | Note |
|---|---|---|---|---|
| Linear Combination | 2.1 | Definition 2.1.10 | Index |  |
| Scalar Multiplication | 2.1 | section 2.1 | Index |  |
| Vector | 2.1 | section 2.1 | Index |  |
| Vector Addition | 2.1 | section 2.1 | Index |  |
| Weights | 2.1 | Definition 2.1.10 | Index |  |
| Scalar | 2.1 | section 2.1 | emphasized in the text (not in the Index) |  |
| Matrix Addition | 2.2 | section 2.2 | Index |  |
| Identity Matrix | 2.2 | Exploration 2.2.1 | Index |  |
| Scalar Multiplication of Matrices | 2.2 | section 2.2 | Index |  |
| Shape of a Matrix | 2.2 | section 2.2 | Index |  |
| Matrix-vector Multiplication | 2.2 | Definition 2.2.3 | Index |  |
| Matrix-matrix Multiplication | 2.2 | Definition 2.2.10 | Definition box (not in the Index) |  |
| Linearity of Matrix Multiplication | 2.2 | Proposition 2.2.6 | titled Proposition (not in the Index) |  |
| Span | 2.3 | Definition 2.3.2 | Index |  |
| Linearly Dependent | 2.4 | Definition 2.4.6 | Index |  |
| Linearly Independent | 2.4 | Definition 2.4.6 | Index |  |
| Discrete Dynamical System | 2.5 | section 2.5 | Index |  |
| Matrix Transformation | 2.5 | Definition 2.5.4 | Index |  |
| State Vector | 2.5 | section 2.5 | Index |  |
| Transition Function | 2.5 | section 2.5 | Index |  |
| Composition | 2.5 | section 2.5 | emphasized in the text (not in the Index) |  |
| Translation | 2.6 | section 2.6 | emphasized in the text (not in the Index) |  |
| Homogeneous Coordinates | 2.6 | section 2.6 | emphasized in the text (not in the Index) |  |
| Shear | 2.6 | section 2.6 | emphasized in the text (not in the Index) |  |
| Projection | 2.6 | section 2.6 | emphasized in the text (not in the Index) |  |

## Chapter 3 Invertibility, Bases, and Coordinate Systems

| Term | Section | Where the book defines it | Taken from | Note |
|---|---|---|---|---|
| Invertible | 3.1 | Definition 3.1.2 | Index |  |
| Lower Triangular Matrix | 3.1 | Definition 3.1.11 | Index |  |
| Elementary Matrix | 3.1 | section 3.1 | Index |  |
| Inverse | 3.1 | Definition 3.1.2 | Index |  |
| Square Matrix | 3.1 | section 3.1 | Index |  |
| Upper Triangular Matrix | 3.1 | Definition 3.1.11 | Index |  |
| Permutation Matrix | 3.1 | section 3.1 | emphasized in the text (not in the Index) |  |
| Diagonal Matrix | 3.1 | section 3.1 | emphasized in the text (not in the Index) |  |
| Properties of Invertible Matrices | 3.1 | Proposition 3.1.10 | titled Proposition (not in the Index) |  |
| Basis | 3.2 | Definition 3.2.4 | Index |  |
| Standard Basis | 3.2 | Example 3.2.7 | Index |  |
| Haar Wavelet Basis | 3.2 | section 3.2 | emphasized in the text (not in the Index) |  |
| RGB Color Model | 3.3 | section 3.3 | Index |  |
| YCbCr Color Model | 3.3 | section 3.3 | Index |  |
| Chrominance | 3.3 | section 3.3 | Index |  |
| Discrete Fourier Transform | 3.3 | section 3.3 | Index | a formula too wide for the table is left out (…) |
| Luminance | 3.3 | section 3.3 | Index |  |
| Color Model | 3.3 | section 3.3 | emphasized in the text (not in the Index) |  |
| Fourier Coefficient | 3.3 | section 3.3 | emphasized in the text (not in the Index) |  |
| Haar Wavelet Transform | 3.3 | section 3.3 | emphasized in the text (not in the Index) |  |
| Determinant | 3.4 | Definition 3.4.4 | Index |  |
| Cofactor Expansion | 3.4 | section 3.4 | emphasized in the text (not in the Index) |  |
| The Effect of Row Operations on the Determinant | 3.4 | Proposition 3.4.13 | titled Proposition (not in the Index) |  |
| Column Space | 3.5 | Definition 3.5.8 | Index |  |
| Dimension | 3.5 | Definition 3.5.6 | Index |  |
| Null Space | 3.5 | Definition 3.5.13 | Index |  |
| Rank | 3.5 | Definition 3.5.11 | Index | Index entry "matrix, rank" is the same box |
| Subspace | 3.5 | Definition 3.5.2 | Index |  |

## Chapter 4 Eigenvalues and Eigenvectors

| Term | Section | Where the book defines it | Taken from | Note |
|---|---|---|---|---|
| Eigenvalue | 4.1 | Definition 4.1.2 | Index |  |
| Eigenvector | 4.1 | Definition 4.1.2 | Index |  |
| Characteristic Equation | 4.2 | section 4.2 | Index |  |
| Characteristic Polynomial | 4.2 | section 4.2 | Index |  |
| Eigenspace | 4.2 | section 4.2 | Index |  |
| Multiplicity | 4.2 | section 4.2 | Index |  |
| Floating Point Number | 4.2 | section 4.2 | emphasized in the text (not in the Index) |  |
| Diagonalizable | 4.3 | Definition 4.3.6 | Index |  |
| Similarity | 4.3 | Definition 4.3.15 | Index |  |
| Trajectory | 4.4 | section 4.4 | emphasized in the text (not in the Index) |  |
| Phase Portrait | 4.4 | section 4.4 | emphasized in the text (not in the Index) |  |
| Attractor | 4.4 | section 4.4 | emphasized in the text (not in the Index) |  |
| Repellor | 4.4 | section 4.4 | emphasized in the text (not in the Index) |  |
| Saddle | 4.4 | section 4.4 | emphasized in the text (not in the Index) |  |
| Spiral Attractor | 4.4 | section 4.4 | emphasized in the text (not in the Index) |  |
| Spiral Repellor | 4.4 | section 4.4 | emphasized in the text (not in the Index) |  |
| Center | 4.4 | section 4.4 | emphasized in the text (not in the Index) |  |
| Markov Chain | 4.5 | section 4.5 | Index |  |
| Positive Matrix | 4.5 | Definition 4.5.7 | Index |  |
| Probability Vector | 4.5 | Definition 4.5.2 | Index |  |
| Steady-state Vector | 4.5 | Definition 4.5.4 | Index | Index entry "stationary vector" is the same box |
| Stochastic Matrix | 4.5 | Definition 4.5.2 | Index |  |
| Perron-Frobenius | 4.5 | Theorem 4.5.9 | titled Theorem (not in the Index) |  |

## Chapter 5 Linear Algebra and Computing

| Term | Section | Where the book defines it | Taken from | Note |
|---|---|---|---|---|
| Partial Pivoting | 5.1 | section 5.1 | Index |  |
| Round Off Error | 5.1 | section 5.1 | Index |  |
| Ill-conditioned | 5.1 | section 5.1 | emphasized in the text (not in the Index) |  |
| Dominant Eigenvalue | 5.2 | section 5.2 | Index |  |
| Power Method | 5.2 | Example 5.2.3 | Index |  |

## Chapter 6 Orthogonality and Least Squares

| Term | Section | Where the book defines it | Taken from | Note |
|---|---|---|---|---|
| Dot Product | 6.1 | section 6.1 | Index |  |
| Orthogonal | 6.1 | Definition 6.1.9 | Index |  |
| Time Series | 6.1 | section 6.1 | emphasized in the text (not in the Index) |  |
| Correlated | 6.1 | section 6.1 | emphasized in the text (not in the Index) |  |
| Demean | 6.1 | section 6.1 | emphasized in the text (not in the Index) |  |
| Clustering | 6.1 | section 6.1 | emphasized in the text (not in the Index) |  |
| Centroid | 6.1 | section 6.1 | emphasized in the text (not in the Index) |  |
| Objective | 6.1 | section 6.1 | emphasized in the text (not in the Index) |  |
| Elbow Plot | 6.1 | section 6.1 | emphasized in the text (not in the Index) |  |
| Orthogonal Complement | 6.2 | Definition 6.2.4 | Index |  |
| Transpose | 6.2 | Definition 6.2.8 | Index |  |
| Orthogonal Matrix | 6.3 | Definition 6.3.26 | Index |  |
| Orthogonal Projection | 6.3 | Definition 6.3.14 | Index |  |
| Orthogonal Set | 6.3 | Definition 6.3.2 | Index |  |
| Orthonormal Set | 6.3 | Definition 6.3.8 | Index | the Index spells it "othonormal set" |
| Unit Vector | 6.3 | section 6.3 | Index |  |
| Projection Formula | 6.3 | Proposition 6.3.18 | titled Proposition (not in the Index) |  |
| Gram-Schmidt Orthogonalization | 6.4 | section 6.4 | Index |  |
| QR Factorization | 6.4 | Proposition 6.4.9 | titled Proposition (not in the Index) |  |
| Coefficient of Determination | 6.5 | Definition 6.5.12 | Index | Index entry "R squared" is the same box |
| Normal Equation | 6.5 | section 6.5 | Index |  |
| Orthogonal Least Squares | 6.5 | section 6.5 | emphasized in the text (not in the Index) |  |
| Least-squares Problem | 6.5 | section 6.5 | emphasized in the text (not in the Index) |  |
| Least-squares Approximate Solution | 6.5 | section 6.5 | emphasized in the text (not in the Index) |  |
| Linear Regression | 6.5 | section 6.5 | emphasized in the text (not in the Index) |  |
| Overfitting | 6.5 | section 6.5 | emphasized in the text (not in the Index) |  |
| Noise | 6.5 | section 6.5 | emphasized in the text (not in the Index) |  |
| Vandermonde Matrix | 6.5 | section 6.5 | emphasized in the text (not in the Index) |  |

## Chapter 7 Singular Value Decompositions

| Term | Section | Where the book defines it | Taken from | Note |
|---|---|---|---|---|
| Orthogonal Diagonalization | 7.1 | Definition 7.1.6 | Index |  |
| Symmetric Matrix | 7.1 | Definition 7.1.7 | Index |  |
| Covariance Matrix | 7.1 | section 7.1 | emphasized in the text (not in the Index) |  |
| The Spectral Theorem | 7.1 | Theorem 7.1.11 | titled Theorem (not in the Index) |  |
| Additivity of Variance | 7.1 | Proposition 7.1.20 | titled Proposition (not in the Index) |  |
| Quadratic Form | 7.2 | Definition 7.2.4 | Index |  |
| Principal Axes Theorem | 7.2 | Theorem 7.2.13 | titled Theorem (not in the Index) |  |
| Positive Definite | 7.2 | Definition 7.2.14 | Definition box (not in the Index) |  |
| Second Derivative Test | 7.2 | Proposition 7.2.18 | titled Proposition (not in the Index) |  |
| Hessian | 7.2 | section 7.2 | emphasized in the text (not in the Index) |  |
| Principal Components | 7.3 | section 7.3 | Index |  |
| Principal Component Analysis | 7.3 | section 7.3 | emphasized in the text (not in the Index) |  |
| Dimensional Reduction | 7.3 | section 7.3 | emphasized in the text (not in the Index) |  |
| Gram Matrix | 7.4 | section 7.4 | Index |  |
| Row Space | 7.4 | section 7.4 | Index |  |
| Singular Value Decomposition | 7.4 | Theorem 7.4.8 | titled Theorem (not in the Index) |  |
| Singular Value | 7.4 | section 7.4 | emphasized in the text (not in the Index) |  |
| Singular Vector | 7.4 | section 7.4 | emphasized in the text (not in the Index) |  |
| Four Fundamental Subspaces | 7.4 | section 7.4 | emphasized in the text (not in the Index) |  |
| Reduced Singular Value Decomposition | 7.4 | Proposition 7.4.15 | titled Proposition (not in the Index) |  |
| Moore-Penrose Inverse | 7.5 | section 7.5 | Index | the Index and the defining sentence spell it "psuedoinverse"; the name is the one the text emphasizes in 7.5 |
| Outer Product | 7.5 | section 7.5 | emphasized in the text (not in the Index) |  |
| Inner Product | 7.5 | section 7.5 | emphasized in the text (not in the Index) |  |
| Compression Ratio | 7.5 | section 7.5 | emphasized in the text (not in the Index) |  |
| Denoising | 7.5 | section 7.5 | emphasized in the text (not in the Index) |  |
| Condition Number | 7.5 | section 7.5 | emphasized in the text (not in the Index) |  |

## Chapter 8 Bézier Curves (from MathWorld)

| Term | Entry | Note |
|---|---|---|
| Bézier Curve | "Bézier curve", para. 1 | the formula image is left out (…) |
| Bernstein Polynomial | "Bernstein polynomial", para. 2 | row kept from the earlier Overview |
