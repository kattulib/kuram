/*
 * Copyright (c) 2024 lamdalib
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

package kuram
package instances

private[instances] trait ListInstances {
  // Applicative
  given listApplicative: Applicative[List] with {
    def pure[A](a: => A): List[A] = List(a)

    def ap[A, B](ff: List[A => B])(as: List[A]): List[B] = for {
      f <- ff
      a <- as
    } yield f(a)
  }

  // Foldable
  given listFoldable: Foldable[List] with {
    override def foldRight[A, B](as: List[A], acc: B)(f: (A, B) => B): B =
      as.foldRight(acc)(f)

    override def foldLeft[A, B](as: List[A], acc: B)(f: (B, A) => B): B =
      as.foldLeft(acc)(f)
  }

  // Functor
  given listFunctor: Functor[List] with {
    def map[A, B](as: List[A])(f: A => B): List[B] =
      as.map(f)
  }

  // Monad
  given listMonad: Monad[List] with {
    def pure[A](a: => A): List[A] = List(a)

    def flatMap[A, B](as: List[A])(f: A => List[B]): List[B] =
      as.flatMap(f)
  }

  // Monoid
  given listMonoid[A]: Monoid[List[A]] with {
    def empty: List[A] = Nil
    def combine(a: List[A], b: List[A]): List[A] = a ++ b
  }
}
