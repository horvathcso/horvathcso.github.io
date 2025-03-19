---
layout: note
title: Lecture Notes - Latin Squares
---

# Latin Squares
As part of the seminar course in Eötvös József College I gave a 2 times 90 min lecture on the topics of latin squares in 2021. The content was aimed at a level, so that already with minimal college level math education people could follow, but interesting results are included in the note with proper references, for people more interested. My original interest arised based in the topics based on the following question I got:


> If you want to organize a night orienteering race series during the winter and you have n participant is it possible to arange them in a way, so every participant starts at each position during an n race series and each pair of participants start rigth after each other in both order?
>
>The motivation was that in night orienteering with probably snow both your order in the start list influence your chance as how many people created the path in the snow beforhand. Also the people you are likely to catch up are the one starting rigth ahead and after you. As in night orienteering the mistakes are more common and you can see the lights of the others from far away it is common to meet with the one starting around you.

At around 16 years old this was the mathematical formulation I come up with. Through my sister this problem arived to the organizing team of Durer competition, where someone found an answer for which n it is possible. This concept is called *Row-complete latin squares* in mathematics. For the final of the given year in the given math contest there was a problem created based on this idea with the text reflecting on the problems origin. ([Problem D.4. on 2016/17 Final](https://durerinfo.hu/wp-content/uploads/2017/02/10KD.pdf))


## Lecture Notes
### Part 1 - Introduction [^1]

**Definitions:** (*Latin rectangle, Latin square, normalized, reduced*)
<p>A <Strong>Latin rectangle</Strong> of size \( k \times n \) (\(n \leq k\)) is an \( k \times n \) array \( L \) with symbols from \( Z_n \) (the set of symbols {1, 2, ..., n}), such that each row and each column contains only distinct symbols. If \( k = n \), then \( L \) is a <Strong>Latin square</Strong> of order \( n \).</p> 

<p>Let \( L_{k,n} \) be the number of \( k \times n \) Latin rectangles.</p>

<p>A Latin rectangle is called <Strong>normalized</Strong> if the first row is \( (1, 2, \ldots, n) \).</p>

<p>A Latin rectangle is called <Strong>reduced</Strong> if it is normalized and the first column is \( (1, 2, \ldots, k)^T \).</p>

<p>Let \( K_{k,n} \) denote the number of normalized \( k \times n \) Latin rectangles, and let \( R_{k,n} \) denote the number of reduced \( k \times n \) Latin rectangles.</p>



*Example:* A Sudoku board is a Latin square.

---

**Question 1:** Does an $$n\times k$$ Latin rectangle exist for all values of  $$n, k$$?

<div class="dropdown">
  <button class="dropdown-button">Click for hint</button>
  <div class="dropdown-content">
    <p>Hint: Yes, it exists.</p>

    <div class="dropdown">
      <button class="dropdown-button">Click for the answer</button>
      <div class="dropdown-content">
        <p>Answer: Without loss of generalization suppose \(k\leq n\), if you number the rows and columns from 1 to k and 1 to n, in the i-th row and j-th column, place the value \( (i + j - 1) \mod n + 1 \). This forms a Latin rectangle.</p>

        General Construction for Any \( n, k \):

        \[
        \begin{pmatrix}
        (1+1-1) \mod n + 1 & (1+2-1) \mod n + 1 & (1+3-1) \mod n + 1 & \ldots & (1+n-1) \mod n + 1 \\
        (2+1-1) \mod n + 1 & (2+2-1) \mod n + 1 & (2+3-1) \mod n + 1 & \ldots & (2+n-1) \mod n + 1 \\
        (3+1-1) \mod n + 1 & (3+2-1) \mod n + 1 & (3+3-1) \mod n + 1 & \ldots & (3+n-1) \mod n + 1 \\
        \vdots & \vdots & \vdots & \ddots & \vdots \\
        (k+1-1) \mod n + 1 & (k+2-1) \mod n + 1 & (k+3-1) \mod n + 1 & \ldots & (k+n-1) \mod n + 1
        \end{pmatrix}
        \]

        Which evaluates to:

        \[
        \begin{pmatrix}
        1 & 2 & 3 & \ldots & n \\
        2 & 3 & 4 & \ldots & 1 \\
        3 & 4 & 5 & \ldots & 2 \\
        \vdots & \vdots & \vdots & \ddots & \vdots \\
        k & 1 & 2 & \ldots & k-2 \mod n+1
        \end{pmatrix}
        \]

      </div>
    </div>
  </div>
</div>


<p><Strong>Question 2:</Strong> What is the relationship between the \(L_{k,n} ,K_{k,n} \) and \(R_{k,n} \) values for given n and k?</p>

<div class="dropdown">
  <button class="dropdown-button">Click for hint</button>
  <div class="dropdown-content">
    <p>Hint: \(L_{k,n}=n!K_{k,n}=\frac{n!(n−1)!}{(n−k)!}R_{k,n}\), in particular \(L_{n,n} = n! K_{n,n} = n!(n−1)!R_{n,n}\)</p>

    <div class="dropdown">
      <button class="dropdown-button">Click for the answer</button>
      <div class="dropdown-content">
        Answer: 
        <ul>
        <li> <em>Idea 1:</em> The main idea is that given a latin rectangle, if you swich up two or more rows, you still has a latin rectangle. And it is the same for the columns.</li>
        <li> <em>Idea 2:</em> To go from reduced to normalized latin squares if \(k < n\), than the first column can include not just the permutation of \(1,\ldots,k\), which is there for the reduced latin square in an orderd way, but also from \(k+1,\ldots, n\)</li>
        </ul>

        <p> Using this two idea after creating assosiations between the different latin rectangle types we have the above given relationships, so \(L_{k,n}=n!K_{k,n}=\frac{n!(n−1)!}{(n−k)!}R_{k,n}\)</p>
      </div>
    </div>
  </div>
</div>

---

*Notes:* In general the number of latin rectangles, or squars are not known in a closed form. There are known results, which gives exact formula using combinatorial calculations. Exact number is known up to $$n=11$$ since 2005 [^3].

Assimptotics results are known, which give us a feeling how fast the number of latin squares are growing [^2]:

$$ L_{n,n} \sim  (\frac{n}{e^2}) ^{n^2} $$

---
---

<!--
### Part 2 - Partial latin squares


---
-->

### To be continued...




---
---
---

[^1]: Stones, Douglas S. “The Many Formulae for the Number of Latin Rectangles.” The Electronic Journal of Combinatorics, June 14, 2010, A1–A1. [https://doi.org/10.37236/487](https://doi.org/10.37236/487).

[^2]: Timashov, A.N.. (2002). On permanents of random doubly stochastic matrices and asymptotic estimates of the numbers of Latin rectangles and Latin squares. Discrete Mathematics and Applications. 12., p. 431–452, [https://doi.org/10.1515/dma-2002-0502](https://doi.org/10.1515/dma-2002-0502) 

[^3]: McKay, B.D., Wanless, I.M. On the Number of Latin Squares. Ann. Comb. 9, 335–344 (2005). [https://doi.org/10.1007/s00026-005-0261-7](https://doi.org/10.1007/s00026-005-0261-7)