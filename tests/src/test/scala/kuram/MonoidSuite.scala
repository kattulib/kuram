/*
 * Copyright (c) 2024 kattulib
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

import kuram.Monoid
import kuram.laws.MonoidLaws
import kuram.instances.all.given

class MonoidSuite extends munit.FunSuite {
  test("Should satisfy identity") {
    List(
      -1,
      0,
      1,
      10
    ).foreach {
      case a => {
        val obtained = MonoidLaws(using Monoid[Int]).identity(a)
        assertEquals(obtained, true)
      }
    }

    List(
      "",
      "h",
      "hello"
    ).foreach {
      case s => {
        val obtained = MonoidLaws(using Monoid[String]).identity(s)
        assertEquals(obtained, true)
      }
    }

    List(
      true,
      false
    ).foreach {
      case b => {
        List(conjuctionBooleanMonoid, disjunctionBooleanMonoid).foreach(law => {
          val obtained = MonoidLaws(using law).identity(b)
          assertEquals(obtained, true)
        })
      }
    }

    List(
      List(),
      List(1),
      List(1, 2, 3)
    ).foreach {
      case a => {
        val obtained = MonoidLaws(using Monoid[List[Int]]).identity(a)
        assertEquals(obtained, true)
      }
    }

    List(
      Set(),
      Set(1),
      Set(1, 2),
      Set(1, 2, 3)
    ).foreach {
      case s => {
        List(unionSetMonoid[Int], intersectSetMonoid[Int]).foreach(law => {
          val obtained = MonoidLaws(using law).identity(s)
          assertEquals(obtained, true)
        })
      }
    }

    List(
      None,
      Option(1)
    ).foreach {
      case a => {
        val obtained = MonoidLaws(using Monoid[Option[Int]]).identity(a)
        assertEquals(obtained, true)
      }
    }

    List(
      Map(),
      Map("x" -> 1),
      Map("x" -> 1, "y" -> 2),
      Map("x" -> 1, "y" -> 2, "z" -> 3)
    ).foreach {
      case a => {
        val obtained = MonoidLaws(using Monoid[Map[String, Int]]).identity(a)
        assertEquals(obtained, true)
      }
    }

  }
}
