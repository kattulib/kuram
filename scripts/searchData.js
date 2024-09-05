pages = [{"l":"index.html#","e":false,"i":"","n":"kuram","t":"kuram","d":"","k":"static","x":""},
{"l":"kuram.html#","e":false,"i":"","n":"kuram","t":"kuram","d":"","k":"package","x":""},
{"l":"kuram/data.html#","e":false,"i":"","n":"kuram.data","t":"kuram.data","d":"","k":"package","x":""},
{"l":"kuram/data.html#IndexedState-0","e":false,"i":"","n":"IndexedState","t":"IndexedState[S1, S2, A] = IndexedStateT[Eval, S1, S2, A]","d":"kuram.data","k":"type","x":""},
{"l":"kuram/data.html#State-0","e":false,"i":"","n":"State","t":"State[S, A] = StateT[Eval, S, A]","d":"kuram.data","k":"type","x":""},
{"l":"kuram/data.html#StateT-0","e":false,"i":"","n":"StateT","t":"StateT[F[_], S, A] = IndexedStateT[F, S, S, A]","d":"kuram.data","k":"type","x":""},
{"l":"kuram/data/Eval.html#","e":false,"i":"","n":"Eval","t":"Eval[+A]","d":"kuram.data","k":"trait","x":""},
{"l":"kuram/data/Eval.html#flatMap-146","e":false,"i":"","n":"flatMap","t":"flatMap[B](f: A => Eval[B]): Eval[B]","d":"kuram.data.Eval","k":"def","x":""},
{"l":"kuram/data/Eval.html#map-146","e":false,"i":"","n":"map","t":"map[B](f: A => B): Eval[B]","d":"kuram.data.Eval","k":"def","x":""},
{"l":"kuram/data/Eval.html#value-0","e":false,"i":"","n":"value","t":"value: A","d":"kuram.data.Eval","k":"def","x":""},
{"l":"kuram/data/Eval$.html#","e":false,"i":"","n":"Eval","t":"Eval","d":"kuram.data","k":"object","x":""},
{"l":"kuram/data/Eval$.html#always-fffffe1a","e":false,"i":"","n":"always","t":"always[A](f: => A): Always[A]","d":"kuram.data.Eval","k":"def","x":""},
{"l":"kuram/data/Eval$.html#defer-367","e":false,"i":"","n":"defer","t":"defer[A](thunk: => Eval[A]): Eval[A]","d":"kuram.data.Eval","k":"def","x":""},
{"l":"kuram/data/Eval$.html#later-921","e":false,"i":"","n":"later","t":"later[A](f: => A): Later[A]","d":"kuram.data.Eval","k":"def","x":""},
{"l":"kuram/data/Eval$.html#now-170","e":false,"i":"","n":"now","t":"now[A](value: A): Now[A]","d":"kuram.data.Eval","k":"def","x":""},
{"l":"kuram/data/IndexedState$.html#","e":false,"i":"","n":"IndexedState","t":"IndexedState","d":"kuram.data","k":"object","x":""},
{"l":"kuram/data/IndexedState$.html#apply-a88","e":false,"i":"","n":"apply","t":"apply[S1, S2, A](f: S1 => (S2, A)): IndexedState[S1, S2, A]","d":"kuram.data.IndexedState","k":"def","x":""},
{"l":"kuram/data/IndexedStateT.html#","e":false,"i":"","n":"IndexedStateT","t":"IndexedStateT[F[_], S1, S2, A](underlying: F[S1 => F[(S2, A)]])","d":"kuram.data","k":"class","x":""},
{"l":"kuram/data/IndexedStateT.html#run-869","e":false,"i":"","n":"run","t":"run(s1: S1)(using F: FlatMap[F]): F[(S2, A)]","d":"kuram.data.IndexedStateT","k":"def","x":""},
{"l":"kuram/data/IndexedStateT.html#runA-869","e":false,"i":"","n":"runA","t":"runA(s1: S1)(using F: FlatMap[F]): F[A]","d":"kuram.data.IndexedStateT","k":"def","x":""},
{"l":"kuram/data/IndexedStateT.html#runS-869","e":false,"i":"","n":"runS","t":"runS(s1: S1)(using F: FlatMap[F]): F[S2]","d":"kuram.data.IndexedStateT","k":"def","x":""},
{"l":"kuram/data/IndexedStateT$.html#","e":false,"i":"","n":"IndexedStateT","t":"IndexedStateT","d":"kuram.data","k":"object","x":""},
{"l":"kuram/data/IndexedStateT$.html#apply-2d3","e":false,"i":"","n":"apply","t":"apply[F[_], S1, S2, A](f: S1 => F[(S2, A)])(using F: Applicative[F]): IndexedStateT[F, S1, S2, A]","d":"kuram.data.IndexedStateT","k":"def","x":""},
{"l":"kuram/data/IndexedStateT$.html#applyF-951","e":false,"i":"","n":"applyF","t":"applyF[F[_], S1, S2, A](f: F[S1 => F[(S2, A)]]): IndexedStateT[F, S1, S2, A]","d":"kuram.data.IndexedStateT","k":"def","x":""},
{"l":"kuram/data/State$.html#","e":false,"i":"","n":"State","t":"State","d":"kuram.data","k":"object","x":""},
{"l":"kuram/data/State$.html#apply-9a9","e":false,"i":"","n":"apply","t":"apply[S, A](f: S => (S, A)): State[S, A]","d":"kuram.data.State","k":"def","x":""},
{"l":"kuram/data/StateT$.html#","e":false,"i":"","n":"StateT","t":"StateT","d":"kuram.data","k":"object","x":""},
{"l":"kuram/data/StateT$.html#apply-9d2","e":false,"i":"","n":"apply","t":"apply[F[_], S, A](f: S => F[(S, A)])(using F: Applicative[F]): StateT[F, S, A]","d":"kuram.data.StateT","k":"def","x":""},
{"l":"kuram/instances.html#","e":false,"i":"","n":"kuram.instances","t":"kuram.instances","d":"","k":"package","x":""},
{"l":"kuram/instances/all.html#","e":false,"i":"","n":"kuram.instances.all","t":"kuram.instances.all","d":"","k":"package","x":""},
{"l":"kuram/instances/boolean$.html#","e":false,"i":"","n":"boolean","t":"boolean","d":"kuram.instances","k":"object","x":""},
{"l":"kuram/instances/boolean$.html#conjuctionBooleanMonoid-0","e":false,"i":"","n":"conjuctionBooleanMonoid","t":"conjuctionBooleanMonoid: conjuctionBooleanMonoid","d":"kuram.instances.boolean","k":"given","x":""},
{"l":"kuram/instances/boolean$.html#disjunctionBooleanMonoid-0","e":false,"i":"","n":"disjunctionBooleanMonoid","t":"disjunctionBooleanMonoid: disjunctionBooleanMonoid","d":"kuram.instances.boolean","k":"given","x":""},
{"l":"kuram/instances/boolean$$conjuctionBooleanMonoid$.html#","e":false,"i":"","n":"conjuctionBooleanMonoid","t":"conjuctionBooleanMonoid extends Monoid[Boolean]","d":"kuram.instances.boolean","k":"object","x":""},
{"l":"kuram/instances/boolean$$conjuctionBooleanMonoid$.html#combine-b60","e":false,"i":"","n":"combine","t":"combine(a: Boolean, b: Boolean): Boolean","d":"kuram.instances.boolean.conjuctionBooleanMonoid","k":"def","x":""},
{"l":"kuram/instances/boolean$$conjuctionBooleanMonoid$.html#empty-0","e":false,"i":"","n":"empty","t":"empty: Boolean","d":"kuram.instances.boolean.conjuctionBooleanMonoid","k":"def","x":""},
{"l":"kuram/instances/boolean$$disjunctionBooleanMonoid$.html#","e":false,"i":"","n":"disjunctionBooleanMonoid","t":"disjunctionBooleanMonoid extends Monoid[Boolean]","d":"kuram.instances.boolean","k":"object","x":""},
{"l":"kuram/instances/boolean$$disjunctionBooleanMonoid$.html#combine-b60","e":false,"i":"","n":"combine","t":"combine(a: Boolean, b: Boolean): Boolean","d":"kuram.instances.boolean.disjunctionBooleanMonoid","k":"def","x":""},
{"l":"kuram/instances/boolean$$disjunctionBooleanMonoid$.html#empty-0","e":false,"i":"","n":"empty","t":"empty: Boolean","d":"kuram.instances.boolean.disjunctionBooleanMonoid","k":"def","x":""},
{"l":"kuram/instances/either$.html#","e":false,"i":"","n":"either","t":"either","d":"kuram.instances","k":"object","x":""},
{"l":"kuram/instances/eval$.html#","e":false,"i":"","n":"eval","t":"eval","d":"kuram.instances","k":"object","x":""},
{"l":"kuram/instances/eval$.html#given_FlatMap_Eval-0","e":false,"i":"","n":"given_FlatMap_Eval","t":"given_FlatMap_Eval: given_FlatMap_Eval","d":"kuram.instances.eval","k":"given","x":""},
{"l":"kuram/instances/eval$$given_FlatMap_Eval$.html#","e":false,"i":"","n":"given_FlatMap_Eval","t":"given_FlatMap_Eval extends FlatMap[Eval]","d":"kuram.instances.eval","k":"object","x":""},
{"l":"kuram/instances/eval$$given_FlatMap_Eval$.html#flatMap-fffffd71","e":false,"i":"extension [A](fa: Eval[A])","n":"flatMap","t":"flatMap[B](f: A => Eval[B]): Eval[B]","d":"kuram.instances.eval.given_FlatMap_Eval","k":"def","x":""},
{"l":"kuram/instances/eval$$given_FlatMap_Eval$.html#map-fffffd71","e":false,"i":"extension [A](fa: Eval[A])","n":"map","t":"map[B](f: A => B): Eval[B]","d":"kuram.instances.eval.given_FlatMap_Eval","k":"def","x":""},
{"l":"kuram/instances/function$.html#","e":false,"i":"","n":"function","t":"function","d":"kuram.instances","k":"object","x":""},
{"l":"kuram/instances/function$.html#function1Compose-0","e":false,"i":"","n":"function1Compose","t":"function1Compose: function1Compose","d":"kuram.instances.function","k":"given","x":""},
{"l":"kuram/instances/function$$function1Compose$.html#","e":false,"i":"","n":"function1Compose","t":"function1Compose extends Compose[Function1]","d":"kuram.instances.function","k":"object","x":""},
{"l":"kuram/instances/function$$function1Compose$.html#compose-35e","e":false,"i":"","n":"compose","t":"compose[A, B, C](f: B => C, g: A => B): A => C","d":"kuram.instances.function.function1Compose","k":"def","x":""},
{"l":"kuram/instances/int$.html#","e":false,"i":"","n":"int","t":"int","d":"kuram.instances","k":"object","x":""},
{"l":"kuram/instances/int$.html#intMonoid-0","e":false,"i":"","n":"intMonoid","t":"intMonoid: intMonoid","d":"kuram.instances.int","k":"given","x":""},
{"l":"kuram/instances/int$.html#intSemigroup-0","e":false,"i":"","n":"intSemigroup","t":"intSemigroup: intSemigroup","d":"kuram.instances.int","k":"given","x":""},
{"l":"kuram/instances/int$$intMonoid$.html#","e":false,"i":"","n":"intMonoid","t":"intMonoid extends Monoid[Int]","d":"kuram.instances.int","k":"object","x":""},
{"l":"kuram/instances/int$$intMonoid$.html#combine-f47","e":false,"i":"","n":"combine","t":"combine(a: Int, b: Int): Int","d":"kuram.instances.int.intMonoid","k":"def","x":""},
{"l":"kuram/instances/int$$intMonoid$.html#empty-0","e":false,"i":"","n":"empty","t":"empty: Int","d":"kuram.instances.int.intMonoid","k":"def","x":""},
{"l":"kuram/instances/int$$intSemigroup$.html#","e":false,"i":"","n":"intSemigroup","t":"intSemigroup extends Semigroup[Int]","d":"kuram.instances.int","k":"object","x":""},
{"l":"kuram/instances/int$$intSemigroup$.html#combine-f47","e":false,"i":"","n":"combine","t":"combine(a: Int, b: Int): Int","d":"kuram.instances.int.intSemigroup","k":"def","x":""},
{"l":"kuram/instances/list$.html#","e":false,"i":"","n":"list","t":"list","d":"kuram.instances","k":"object","x":""},
{"l":"kuram/instances/list$.html#listApplicative-0","e":false,"i":"","n":"listApplicative","t":"listApplicative: listApplicative","d":"kuram.instances.list","k":"given","x":""},
{"l":"kuram/instances/list$.html#listApply-0","e":false,"i":"","n":"listApply","t":"listApply: listApply","d":"kuram.instances.list","k":"given","x":""},
{"l":"kuram/instances/list$.html#listFoldable-0","e":false,"i":"","n":"listFoldable","t":"listFoldable: listFoldable","d":"kuram.instances.list","k":"given","x":""},
{"l":"kuram/instances/list$.html#listFunctor-0","e":false,"i":"","n":"listFunctor","t":"listFunctor: listFunctor","d":"kuram.instances.list","k":"given","x":""},
{"l":"kuram/instances/list$.html#listMonad-0","e":false,"i":"","n":"listMonad","t":"listMonad: listMonad","d":"kuram.instances.list","k":"given","x":""},
{"l":"kuram/instances/list$.html#listMonoid-a7f","e":false,"i":"","n":"listMonoid","t":"listMonoid[A]: listMonoid[A]","d":"kuram.instances.list","k":"given","x":""},
{"l":"kuram/instances/list$.html#listSemigroup-fffff8f0","e":false,"i":"","n":"listSemigroup","t":"listSemigroup[A]: listSemigroup[A]","d":"kuram.instances.list","k":"given","x":""},
{"l":"kuram/instances/list$$listApplicative$.html#","e":false,"i":"","n":"listApplicative","t":"listApplicative extends Applicative[List]","d":"kuram.instances.list","k":"object","x":""},
{"l":"kuram/instances/list$$listApplicative$.html#ap-410","e":false,"i":"extension [A](fa: List[A])","n":"ap","t":"ap[B](ff: List[A => B]): List[B]","d":"kuram.instances.list.listApplicative","k":"def","x":""},
{"l":"kuram/instances/list$$listApplicative$.html#pure-833","e":false,"i":"","n":"pure","t":"pure[A](a: => A): List[A]","d":"kuram.instances.list.listApplicative","k":"def","x":""},
{"l":"kuram/instances/list$$listApply$.html#","e":false,"i":"","n":"listApply","t":"listApply extends Apply[List]","d":"kuram.instances.list","k":"object","x":""},
{"l":"kuram/instances/list$$listApply$.html#ap-410","e":false,"i":"extension [A](fa: List[A])","n":"ap","t":"ap[B](ff: List[A => B]): List[B]","d":"kuram.instances.list.listApply","k":"def","x":""},
{"l":"kuram/instances/list$$listApply$.html#map-fffff3f1","e":false,"i":"extension [A](fa: List[A])","n":"map","t":"map[B](f: A => B): List[B]","d":"kuram.instances.list.listApply","k":"def","x":""},
{"l":"kuram/instances/list$$listFoldable$.html#","e":false,"i":"","n":"listFoldable","t":"listFoldable extends Foldable[List]","d":"kuram.instances.list","k":"object","x":""},
{"l":"kuram/instances/list$$listFunctor$.html#","e":false,"i":"","n":"listFunctor","t":"listFunctor extends Functor[List]","d":"kuram.instances.list","k":"object","x":""},
{"l":"kuram/instances/list$$listFunctor$.html#map-fffff3f1","e":false,"i":"extension [A](as: List[A])","n":"map","t":"map[B](f: A => B): List[B]","d":"kuram.instances.list.listFunctor","k":"def","x":""},
{"l":"kuram/instances/list$$listMonad$.html#","e":false,"i":"","n":"listMonad","t":"listMonad extends Monad[List]","d":"kuram.instances.list","k":"object","x":""},
{"l":"kuram/instances/list$$listMonad$.html#flatMap-fffff3f1","e":false,"i":"extension [A](fa: List[A])","n":"flatMap","t":"flatMap[B](f: A => List[B]): List[B]","d":"kuram.instances.list.listMonad","k":"def","x":""},
{"l":"kuram/instances/list$$listMonad$.html#pure-833","e":false,"i":"","n":"pure","t":"pure[A](a: => A): List[A]","d":"kuram.instances.list.listMonad","k":"def","x":""},
{"l":"kuram/instances/map$.html#","e":false,"i":"","n":"map","t":"map","d":"kuram.instances","k":"object","x":""},
{"l":"kuram/instances/map$.html#mapApply-cdd","e":false,"i":"","n":"mapApply","t":"mapApply[K]: mapApply[K]","d":"kuram.instances.map","k":"given","x":""},
{"l":"kuram/instances/map$.html#mapFunctor-1c2","e":false,"i":"","n":"mapFunctor","t":"mapFunctor[K]: mapFunctor[K]","d":"kuram.instances.map","k":"given","x":""},
{"l":"kuram/instances/map$.html#mapMonoid-fffffb08","e":false,"i":"","n":"mapMonoid","t":"mapMonoid[K, V : Monoid]: mapMonoid[K, V]","d":"kuram.instances.map","k":"given","x":""},
{"l":"kuram/instances/option$.html#","e":false,"i":"","n":"option","t":"option","d":"kuram.instances","k":"object","x":""},
{"l":"kuram/instances/option$.html#optionApplicative-0","e":false,"i":"","n":"optionApplicative","t":"optionApplicative: optionApplicative","d":"kuram.instances.option","k":"given","x":""},
{"l":"kuram/instances/option$.html#optionApply-0","e":false,"i":"","n":"optionApply","t":"optionApply: optionApply","d":"kuram.instances.option","k":"given","x":""},
{"l":"kuram/instances/option$.html#optionFunctor-0","e":false,"i":"","n":"optionFunctor","t":"optionFunctor: optionFunctor","d":"kuram.instances.option","k":"given","x":""},
{"l":"kuram/instances/option$.html#optionMonad-0","e":false,"i":"","n":"optionMonad","t":"optionMonad: optionMonad","d":"kuram.instances.option","k":"given","x":""},
{"l":"kuram/instances/option$.html#optionMonoid-fffff3c5","e":false,"i":"","n":"optionMonoid","t":"optionMonoid[A : Monoid]: optionMonoid[A]","d":"kuram.instances.option","k":"given","x":""},
{"l":"kuram/instances/option$.html#optionSemigroup-1ad","e":false,"i":"","n":"optionSemigroup","t":"optionSemigroup[A : Semigroup]: optionSemigroup[A]","d":"kuram.instances.option","k":"given","x":""},
{"l":"kuram/instances/option$$optionApplicative$.html#","e":false,"i":"","n":"optionApplicative","t":"optionApplicative extends Applicative[Option]","d":"kuram.instances.option","k":"object","x":""},
{"l":"kuram/instances/option$$optionApplicative$.html#ap-8fd","e":false,"i":"extension [A](fa: Option[A])","n":"ap","t":"ap[B](ff: Option[A => B]): Option[B]","d":"kuram.instances.option.optionApplicative","k":"def","x":""},
{"l":"kuram/instances/option$$optionApplicative$.html#pure-bfc","e":false,"i":"","n":"pure","t":"pure[A](a: => A): Option[A]","d":"kuram.instances.option.optionApplicative","k":"def","x":""},
{"l":"kuram/instances/option$$optionApply$.html#","e":false,"i":"","n":"optionApply","t":"optionApply extends Apply[Option]","d":"kuram.instances.option","k":"object","x":""},
{"l":"kuram/instances/option$$optionApply$.html#ap-8fd","e":false,"i":"extension [A](fa: Option[A])","n":"ap","t":"ap[B](ff: Option[A => B]): Option[B]","d":"kuram.instances.option.optionApply","k":"def","x":""},
{"l":"kuram/instances/option$$optionApply$.html#map-fffff66b","e":false,"i":"extension [A](fa: Option[A])","n":"map","t":"map[B](f: A => B): Option[B]","d":"kuram.instances.option.optionApply","k":"def","x":""},
{"l":"kuram/instances/option$$optionFunctor$.html#","e":false,"i":"","n":"optionFunctor","t":"optionFunctor extends Functor[Option]","d":"kuram.instances.option","k":"object","x":""},
{"l":"kuram/instances/option$$optionFunctor$.html#map-fffff66b","e":false,"i":"extension [A](fa: Option[A])","n":"map","t":"map[B](f: A => B): Option[B]","d":"kuram.instances.option.optionFunctor","k":"def","x":""},
{"l":"kuram/instances/option$$optionMonad$.html#","e":false,"i":"","n":"optionMonad","t":"optionMonad extends Monad[Option]","d":"kuram.instances.option","k":"object","x":""},
{"l":"kuram/instances/option$$optionMonad$.html#flatMap-fffff66b","e":false,"i":"extension [A](fa: Option[A])","n":"flatMap","t":"flatMap[B](f: A => Option[B]): Option[B]","d":"kuram.instances.option.optionMonad","k":"def","x":""},
{"l":"kuram/instances/option$$optionMonad$.html#pure-bfc","e":false,"i":"","n":"pure","t":"pure[A](a: => A): Option[A]","d":"kuram.instances.option.optionMonad","k":"def","x":""},
{"l":"kuram/instances/seq$.html#","e":false,"i":"","n":"seq","t":"seq","d":"kuram.instances","k":"object","x":""},
{"l":"kuram/instances/seq$.html#seqFoldable-0","e":false,"i":"","n":"seqFoldable","t":"seqFoldable: seqFoldable","d":"kuram.instances.seq","k":"given","x":""},
{"l":"kuram/instances/seq$$seqFoldable$.html#","e":false,"i":"","n":"seqFoldable","t":"seqFoldable extends Foldable[Seq]","d":"kuram.instances.seq","k":"object","x":""},
{"l":"kuram/instances/set$.html#","e":false,"i":"","n":"set","t":"set","d":"kuram.instances","k":"object","x":""},
{"l":"kuram/instances/set$.html#intersectSetMonoid-392","e":false,"i":"","n":"intersectSetMonoid","t":"intersectSetMonoid[A]: intersectSetMonoid[A]","d":"kuram.instances.set","k":"given","x":""},
{"l":"kuram/instances/set$.html#unionSetMonoid-fffff862","e":false,"i":"","n":"unionSetMonoid","t":"unionSetMonoid[A]: unionSetMonoid[A]","d":"kuram.instances.set","k":"given","x":""},
{"l":"kuram/instances/string$.html#","e":false,"i":"","n":"string","t":"string","d":"kuram.instances","k":"object","x":""},
{"l":"kuram/instances/string$.html#stringMonoid-0","e":false,"i":"","n":"stringMonoid","t":"stringMonoid: stringMonoid","d":"kuram.instances.string","k":"given","x":""},
{"l":"kuram/instances/string$.html#stringSemigroup-0","e":false,"i":"","n":"stringSemigroup","t":"stringSemigroup: stringSemigroup","d":"kuram.instances.string","k":"given","x":""},
{"l":"kuram/instances/string$$stringMonoid$.html#","e":false,"i":"","n":"stringMonoid","t":"stringMonoid extends Monoid[String]","d":"kuram.instances.string","k":"object","x":""},
{"l":"kuram/instances/string$$stringMonoid$.html#combine-fffff52f","e":false,"i":"","n":"combine","t":"combine(a: String, b: String): String","d":"kuram.instances.string.stringMonoid","k":"def","x":""},
{"l":"kuram/instances/string$$stringMonoid$.html#empty-0","e":false,"i":"","n":"empty","t":"empty: String","d":"kuram.instances.string.stringMonoid","k":"def","x":""},
{"l":"kuram/instances/string$$stringSemigroup$.html#","e":false,"i":"","n":"stringSemigroup","t":"stringSemigroup extends Semigroup[String]","d":"kuram.instances.string","k":"object","x":""},
{"l":"kuram/instances/string$$stringSemigroup$.html#combine-fffff52f","e":false,"i":"","n":"combine","t":"combine(a: String, b: String): String","d":"kuram.instances.string.stringSemigroup","k":"def","x":""},
{"l":"kuram/laws.html#","e":false,"i":"","n":"kuram.laws","t":"kuram.laws","d":"","k":"package","x":""},
{"l":"kuram/laws/ApplicativeLaws.html#","e":false,"i":"","n":"ApplicativeLaws","t":"ApplicativeLaws[F[_]]","d":"kuram.laws","k":"trait","x":""},
{"l":"kuram/laws/ApplicativeLaws.html#F-0","e":false,"i":"","n":"F","t":"F: Applicative[F]","d":"kuram.laws.ApplicativeLaws","k":"def","x":""},
{"l":"kuram/laws/ApplicativeLaws.html#associativity-d93","e":false,"i":"","n":"associativity","t":"associativity[A, B, C, Z](fa: F[A], fb: F[B], fc: F[C]): Boolean","d":"kuram.laws.ApplicativeLaws","k":"def","x":""},
{"l":"kuram/laws/ApplicativeLaws.html#homomorphism-2b4","e":false,"i":"","n":"homomorphism","t":"homomorphism[A, B](a: A, f: A => B): Boolean","d":"kuram.laws.ApplicativeLaws","k":"def","x":""},
{"l":"kuram/laws/ApplicativeLaws.html#identity-e1c","e":false,"i":"","n":"identity","t":"identity[A](fa: F[A]): Boolean","d":"kuram.laws.ApplicativeLaws","k":"def","x":""},
{"l":"kuram/laws/ApplicativeLaws.html#leftIdentity-e1c","e":false,"i":"","n":"leftIdentity","t":"leftIdentity[A](fa: F[A]): Boolean","d":"kuram.laws.ApplicativeLaws","k":"def","x":""},
{"l":"kuram/laws/ApplicativeLaws.html#naturality-887","e":false,"i":"","n":"naturality","t":"naturality[A, B, C](fa: F[A], fb: F[B], f: A => B, g: B => C): Boolean","d":"kuram.laws.ApplicativeLaws","k":"def","x":""},
{"l":"kuram/laws/ApplicativeLaws.html#rightIdentity-e1c","e":false,"i":"","n":"rightIdentity","t":"rightIdentity[A](fa: F[A]): Boolean","d":"kuram.laws.ApplicativeLaws","k":"def","x":""},
{"l":"kuram/laws/ApplicativeLaws$.html#","e":false,"i":"","n":"ApplicativeLaws","t":"ApplicativeLaws","d":"kuram.laws","k":"object","x":""},
{"l":"kuram/laws/ApplicativeLaws$.html#apply-8c3","e":false,"i":"","n":"apply","t":"apply[F[_]](using applicative: Applicative[F]): ApplicativeLaws[F]","d":"kuram.laws.ApplicativeLaws","k":"def","x":""},
{"l":"kuram/laws/ApplyLaws.html#","e":false,"i":"","n":"ApplyLaws","t":"ApplyLaws[F[_]]","d":"kuram.laws","k":"trait","x":""},
{"l":"kuram/laws/ApplyLaws.html#F-0","e":false,"i":"","n":"F","t":"F: Apply[F]","d":"kuram.laws.ApplyLaws","k":"def","x":""},
{"l":"kuram/laws/ApplyLaws$.html#","e":false,"i":"","n":"ApplyLaws","t":"ApplyLaws","d":"kuram.laws","k":"object","x":""},
{"l":"kuram/laws/ApplyLaws$.html#apply-fffffa9f","e":false,"i":"","n":"apply","t":"apply[F[_]](using apply: Apply[F]): ApplyLaws[F]","d":"kuram.laws.ApplyLaws","k":"def","x":""},
{"l":"kuram/laws/ComposeLaws.html#","e":false,"i":"","n":"ComposeLaws","t":"ComposeLaws[F[_, _]]","d":"kuram.laws","k":"trait","x":""},
{"l":"kuram/laws/ComposeLaws.html#F-0","e":false,"i":"","n":"F","t":"F: Compose[F]","d":"kuram.laws.ComposeLaws","k":"def","x":""},
{"l":"kuram/laws/ComposeLaws.html#composeAssociativity-d93","e":false,"i":"","n":"composeAssociativity","t":"composeAssociativity[A, B, C, Z](f: F[A, B], g: F[B, C], h: F[C, Z]): Boolean","d":"kuram.laws.ComposeLaws","k":"def","x":""},
{"l":"kuram/laws/ComposeLaws$.html#","e":false,"i":"","n":"ComposeLaws","t":"ComposeLaws","d":"kuram.laws","k":"object","x":""},
{"l":"kuram/laws/ComposeLaws$.html#apply-a7","e":false,"i":"","n":"apply","t":"apply[F[_, _]](using compose: Compose[F]): ComposeLaws[F]","d":"kuram.laws.ComposeLaws","k":"def","x":""},
{"l":"kuram/laws/FoldableLaws.html#","e":false,"i":"","n":"FoldableLaws","t":"FoldableLaws[F[_]]","d":"kuram.laws","k":"trait","x":""},
{"l":"kuram/laws/FoldableLaws.html#F-0","e":false,"i":"","n":"F","t":"F: Foldable[F]","d":"kuram.laws.FoldableLaws","k":"def","x":""},
{"l":"kuram/laws/FoldableLaws$.html#","e":false,"i":"","n":"FoldableLaws","t":"FoldableLaws","d":"kuram.laws","k":"object","x":""},
{"l":"kuram/laws/FoldableLaws$.html#apply-909","e":false,"i":"","n":"apply","t":"apply[F[_]](using foldable: Foldable[F]): FoldableLaws[F]","d":"kuram.laws.FoldableLaws","k":"def","x":""},
{"l":"kuram/laws/FunctorLaws.html#","e":false,"i":"","n":"FunctorLaws","t":"FunctorLaws[F[_]]","d":"kuram.laws","k":"trait","x":""},
{"l":"kuram/laws/FunctorLaws.html#F-0","e":false,"i":"","n":"F","t":"F: Functor[F]","d":"kuram.laws.FunctorLaws","k":"def","x":""},
{"l":"kuram/laws/FunctorLaws.html#composition-3fa","e":false,"i":"","n":"composition","t":"composition[A, B, C](fa: F[A], f: A => B, g: B => C): Boolean","d":"kuram.laws.FunctorLaws","k":"def","x":""},
{"l":"kuram/laws/FunctorLaws.html#identity-e1c","e":false,"i":"","n":"identity","t":"identity[A](fa: F[A]): Boolean","d":"kuram.laws.FunctorLaws","k":"def","x":""},
{"l":"kuram/laws/FunctorLaws$.html#","e":false,"i":"","n":"FunctorLaws","t":"FunctorLaws","d":"kuram.laws","k":"object","x":""},
{"l":"kuram/laws/FunctorLaws$.html#apply-fffffe69","e":false,"i":"","n":"apply","t":"apply[F[_]](using functor: Functor[F]): FunctorLaws[F]","d":"kuram.laws.FunctorLaws","k":"def","x":""},
{"l":"kuram/laws/MonadLaws.html#","e":false,"i":"","n":"MonadLaws","t":"MonadLaws[F[_]]","d":"kuram.laws","k":"trait","x":""},
{"l":"kuram/laws/MonadLaws.html#M-0","e":false,"i":"","n":"M","t":"M: Monad[F]","d":"kuram.laws.MonadLaws","k":"def","x":""},
{"l":"kuram/laws/MonadLaws.html#associativity-f59","e":false,"i":"","n":"associativity","t":"associativity[A, B, C, Z](x: F[A])(f: A => F[B], g: B => F[C]): Boolean","d":"kuram.laws.MonadLaws","k":"def","x":""},
{"l":"kuram/laws/MonadLaws.html#leftIdentity-2b4","e":false,"i":"","n":"leftIdentity","t":"leftIdentity[A, B](x: A, f: A => F[B]): Boolean","d":"kuram.laws.MonadLaws","k":"def","x":""},
{"l":"kuram/laws/MonadLaws.html#rightIdentity-9bb","e":false,"i":"","n":"rightIdentity","t":"rightIdentity[A, B](x: F[A]): Boolean","d":"kuram.laws.MonadLaws","k":"def","x":""},
{"l":"kuram/laws/MonadLaws$.html#","e":false,"i":"","n":"MonadLaws","t":"MonadLaws","d":"kuram.laws","k":"object","x":""},
{"l":"kuram/laws/MonadLaws$.html#apply-121","e":false,"i":"","n":"apply","t":"apply[F[_]](using monad: Monad[F]): MonadLaws[F]","d":"kuram.laws.MonadLaws","k":"def","x":""},
{"l":"kuram/laws/MonoidLaws.html#","e":false,"i":"","n":"MonoidLaws","t":"MonoidLaws[T] extends SemigroupLaws[T]","d":"kuram.laws","k":"trait","x":""},
{"l":"kuram/laws/MonoidLaws.html#F-0","e":false,"i":"","n":"F","t":"F: Monoid[T]","d":"kuram.laws.MonoidLaws","k":"def","x":""},
{"l":"kuram/laws/MonoidLaws.html#identity-4ad","e":false,"i":"","n":"identity","t":"identity(x: T): Boolean","d":"kuram.laws.MonoidLaws","k":"def","x":""},
{"l":"kuram/laws/MonoidLaws$.html#","e":false,"i":"","n":"MonoidLaws","t":"MonoidLaws","d":"kuram.laws","k":"object","x":""},
{"l":"kuram/laws/MonoidLaws$.html#apply-fffff7e9","e":false,"i":"","n":"apply","t":"apply[T](using monoid: Monoid[T]): MonoidLaws[T]","d":"kuram.laws.MonoidLaws","k":"def","x":""},
{"l":"kuram/laws/SemigroupLaws.html#","e":false,"i":"","n":"SemigroupLaws","t":"SemigroupLaws[T]","d":"kuram.laws","k":"trait","x":""},
{"l":"kuram/laws/SemigroupLaws.html#F-0","e":false,"i":"","n":"F","t":"F: Semigroup[T]","d":"kuram.laws.SemigroupLaws","k":"def","x":""},
{"l":"kuram/laws/SemigroupLaws.html#associativity-fffff147","e":false,"i":"","n":"associativity","t":"associativity(a: T, b: T, c: T): Boolean","d":"kuram.laws.SemigroupLaws","k":"def","x":""},
{"l":"kuram/laws/SemigroupLaws.html#homomorphism-763","e":false,"i":"","n":"homomorphism","t":"homomorphism[U](a: T, b: T)(f: T => U)(using U: Semigroup[U]): Boolean","d":"kuram.laws.SemigroupLaws","k":"def","x":""},
{"l":"kuram/laws/SemigroupLaws$.html#","e":false,"i":"","n":"SemigroupLaws","t":"SemigroupLaws","d":"kuram.laws","k":"object","x":""},
{"l":"kuram/laws/SemigroupLaws$.html#apply-665","e":false,"i":"","n":"apply","t":"apply[T](using semigroup: Semigroup[T]): SemigroupLaws[T]","d":"kuram.laws.SemigroupLaws","k":"def","x":""},
{"l":"kuram/Applicative.html#","e":false,"i":"","n":"Applicative","t":"Applicative[F[_]] extends Apply[F]","d":"kuram","k":"trait","x":""},
{"l":"kuram/Applicative.html#map2-fffffb84","e":false,"i":"extension [A](fa: F[A])","n":"map2","t":"map2[B, Z](fb: F[B])(f: (A, B) => Z): F[Z]","d":"kuram.Applicative","k":"def","x":""},
{"l":"kuram/Applicative.html#map3-fffff371","e":false,"i":"extension [A](fa: F[A])","n":"map3","t":"map3[B, C, Z](fb: F[B], fc: F[C])(f: (A, B, C) => Z): F[Z]","d":"kuram.Applicative","k":"def","x":""},
{"l":"kuram/Applicative.html#map4-55e","e":false,"i":"extension [A](fa: F[A])","n":"map4","t":"map4[B, C, D, Z](fb: F[B], fc: F[C], fd: F[D])(f: (A, B, C, D) => Z): F[Z]","d":"kuram.Applicative","k":"def","x":""},
{"l":"kuram/Applicative.html#map5-14b","e":false,"i":"extension [A](fa: F[A])","n":"map5","t":"map5[B, C, D, E, Z](fb: F[B], fc: F[C], fd: F[D], fe: F[E])(f: (A, B, C, D, E) => Z): F[Z]","d":"kuram.Applicative","k":"def","x":""},
{"l":"kuram/Applicative.html#map6-fffff738","e":false,"i":"extension [A](fa: F[A])","n":"map6","t":"map6[B, C, D, E, G, Z](fb: F[B], fc: F[C], fd: F[D], fe: F[E], fg: F[G])(f: (A, B, C, D, E, G) => Z): F[Z]","d":"kuram.Applicative","k":"def","x":""},
{"l":"kuram/Applicative.html#pure-fffff7d2","e":false,"i":"","n":"pure","t":"pure[A](a: => A): F[A]","d":"kuram.Applicative","k":"def","x":""},
{"l":"kuram/Applicative$.html#","e":false,"i":"","n":"Applicative","t":"Applicative","d":"kuram","k":"object","x":""},
{"l":"kuram/Applicative$.html#apply-b1","e":false,"i":"","n":"apply","t":"apply[F[_]](using instance: Applicative[F]): Applicative[F]","d":"kuram.Applicative","k":"def","x":""},
{"l":"kuram/Apply.html#","e":false,"i":"","n":"Apply","t":"Apply[F[_]] extends Functor[F]","d":"kuram","k":"trait","x":""},
{"l":"kuram/Apply.html#ap-fffffa13","e":false,"i":"extension [A](fa: F[A])","n":"ap","t":"ap[B](ff: F[A => B]): F[B]","d":"kuram.Apply","k":"def","x":""},
{"l":"kuram/Apply.html#ap2-fffff7a7","e":false,"i":"extension [A](fa: F[A])","n":"ap2","t":"ap2[B, Z](ff: F[(A, B) => Z])(fb: F[B]): F[Z]","d":"kuram.Apply","k":"def","x":""},
{"l":"kuram/Apply.html#product-fffffa13","e":false,"i":"extension [A](fa: F[A])","n":"product","t":"product[B](fb: F[B]): F[(A, B)]","d":"kuram.Apply","k":"def","x":""},
{"l":"kuram/Apply.html#product2-fffff7a7","e":false,"i":"extension [A](fa: F[A])","n":"product2","t":"product2[B, C](fb: F[B], fc: F[C]): F[(A, B, C)]","d":"kuram.Apply","k":"def","x":""},
{"l":"kuram/Apply$.html#","e":false,"i":"","n":"Apply","t":"Apply","d":"kuram","k":"object","x":""},
{"l":"kuram/Apply$.html#apply-8f1","e":false,"i":"","n":"apply","t":"apply[F[_]](using instance: Apply[F]): Apply[F]","d":"kuram.Apply","k":"def","x":""},
{"l":"kuram/Compose.html#","e":false,"i":"","n":"Compose","t":"Compose[F[_, _]]","d":"kuram","k":"trait","x":""},
{"l":"kuram/Compose.html#andThen-fffff8ec","e":false,"i":"","n":"andThen","t":"andThen[A, B, C](f: F[A, B], g: F[B, C]): F[A, C]","d":"kuram.Compose","k":"def","x":""},
{"l":"kuram/Compose.html#compose-fffff8ec","e":false,"i":"","n":"compose","t":"compose[A, B, C](f: F[B, C], g: F[A, B]): F[A, C]","d":"kuram.Compose","k":"def","x":""},
{"l":"kuram/Compose$.html#","e":false,"i":"","n":"Compose","t":"Compose","d":"kuram","k":"object","x":""},
{"l":"kuram/Compose$.html#apply-fffff7f1","e":false,"i":"","n":"apply","t":"apply[F[_, _]](using instance: Compose[F]): Compose[F]","d":"kuram.Compose","k":"def","x":""},
{"l":"kuram/ComposeOps$.html#","e":false,"i":"","n":"ComposeOps","t":"ComposeOps","d":"kuram","k":"object","x":""},
{"l":"kuram/ComposeOps$.html#<<<-fffff271","e":false,"i":"extension [F[_, _], A, B, C](f: F[B, C])","n":"<<<","t":"<<<(g: F[A, B])(using c: Compose[F]): F[A, C]","d":"kuram.ComposeOps","k":"def","x":""},
{"l":"kuram/ComposeOps$.html#>>>-fffff271","e":false,"i":"extension [F[_, _], A, B, C](f: F[A, B])","n":">>>","t":">>>(g: F[B, C])(using c: Compose[F]): F[A, C]","d":"kuram.ComposeOps","k":"def","x":""},
{"l":"kuram/FlatMap.html#","e":false,"i":"","n":"FlatMap","t":"FlatMap[F[_]] extends Apply[F]","d":"kuram","k":"trait","x":""},
{"l":"kuram/FlatMap.html#flatMap-fffffd97","e":false,"i":"extension [A](fa: F[A])","n":"flatMap","t":"flatMap[B](f: A => F[B]): F[B]","d":"kuram.FlatMap","k":"def","x":""},
{"l":"kuram/Foldable.html#","e":false,"i":"","n":"Foldable","t":"Foldable[F[_]]","d":"kuram","k":"trait","x":""},
{"l":"kuram/Foldable.html#foldLeft-fffff9a5","e":false,"i":"extension [A](as: F[A])","n":"foldLeft","t":"foldLeft[B](acc: B)(f: (B, A) => B): B","d":"kuram.Foldable","k":"def","x":""},
{"l":"kuram/Foldable.html#foldMap-ffffffaf","e":false,"i":"extension [A](as: F[A])","n":"foldMap","t":"foldMap[B](f: A => B)(using m: Monoid[B]): B","d":"kuram.Foldable","k":"def","x":""},
{"l":"kuram/Foldable.html#foldRight-fffff9a5","e":false,"i":"extension [A](as: F[A])","n":"foldRight","t":"foldRight[B](acc: B)(f: (A, B) => B): B","d":"kuram.Foldable","k":"def","x":""},
{"l":"kuram/Foldable$.html#","e":false,"i":"","n":"Foldable","t":"Foldable","d":"kuram","k":"object","x":""},
{"l":"kuram/Foldable$.html#apply-fffffa5b","e":false,"i":"","n":"apply","t":"apply[F[_]](using instance: Foldable[F]): Foldable[F]","d":"kuram.Foldable","k":"def","x":""},
{"l":"kuram/Functor.html#","e":false,"i":"","n":"Functor","t":"Functor[F[_]]","d":"kuram","k":"trait","x":""},
{"l":"kuram/Functor.html#as-f96","e":false,"i":"extension [A](fa: F[A])","n":"as","t":"as[B](b: => B): F[B]","d":"kuram.Functor","k":"def","x":""},
{"l":"kuram/Functor.html#fmap-fffffd97","e":false,"i":"extension [A](fa: F[A])","n":"fmap","t":"fmap[B](f: A => B): F[B]","d":"kuram.Functor","k":"def","x":""},
{"l":"kuram/Functor.html#lift-892","e":false,"i":"","n":"lift","t":"lift[A, B](f: A => B): (F[A]) => F[B]","d":"kuram.Functor","k":"def","x":""},
{"l":"kuram/Functor.html#map-fffffd97","e":false,"i":"extension [A](fa: F[A])","n":"map","t":"map[B](f: A => B): F[B]","d":"kuram.Functor","k":"def","x":""},
{"l":"kuram/Functor.html#void-957","e":false,"i":"extension [A](fa: F[A])","n":"void","t":"void: F[Unit]","d":"kuram.Functor","k":"def","x":""},
{"l":"kuram/Functor$.html#","e":false,"i":"","n":"Functor","t":"Functor","d":"kuram","k":"object","x":""},
{"l":"kuram/Functor$.html#apply-fffff191","e":false,"i":"","n":"apply","t":"apply[F[_]](using instance: Functor[F]): Functor[F]","d":"kuram.Functor","k":"def","x":""},
{"l":"kuram/Monad.html#","e":false,"i":"","n":"Monad","t":"Monad[F[_]] extends Applicative[F], FlatMap[F]","d":"kuram","k":"trait","x":""},
{"l":"kuram/Monad$.html#","e":false,"i":"","n":"Monad","t":"Monad","d":"kuram","k":"object","x":""},
{"l":"kuram/Monad$.html#apply-fffff651","e":false,"i":"","n":"apply","t":"apply[F[_]](using instance: Monad[F]): Monad[F]","d":"kuram.Monad","k":"def","x":""},
{"l":"kuram/Monoid.html#","e":false,"i":"","n":"Monoid","t":"Monoid[T] extends Semigroup[T]","d":"kuram","k":"trait","x":""},
{"l":"kuram/Monoid.html#empty-0","e":false,"i":"","n":"empty","t":"empty: T","d":"kuram.Monoid","k":"def","x":""},
{"l":"kuram/Monoid$.html#","e":false,"i":"","n":"Monoid","t":"Monoid","d":"kuram","k":"object","x":""},
{"l":"kuram/Monoid$.html#apply-961","e":false,"i":"","n":"apply","t":"apply[T](using instance: Monoid[T]): Monoid[T]","d":"kuram.Monoid","k":"def","x":""},
{"l":"kuram/Semigroup.html#","e":false,"i":"","n":"Semigroup","t":"Semigroup[T]","d":"kuram","k":"trait","x":""},
{"l":"kuram/Semigroup.html#combine-fffffab9","e":false,"i":"","n":"combine","t":"combine(a: T, b: T): T","d":"kuram.Semigroup","k":"def","x":""},
{"l":"kuram/Semigroup$.html#","e":false,"i":"","n":"Semigroup","t":"Semigroup","d":"kuram","k":"object","x":""},
{"l":"kuram/Semigroup$.html#apply-f91","e":false,"i":"","n":"apply","t":"apply[T](using instance: Semigroup[T]): Semigroup[T]","d":"kuram.Semigroup","k":"def","x":""},
{"l":"kuram/SemigroupOps$.html#","e":false,"i":"","n":"SemigroupOps","t":"SemigroupOps","d":"kuram","k":"object","x":""},
{"l":"kuram/SemigroupOps$.html#|+|-fffff013","e":false,"i":"extension [T](a: T)","n":"|+|","t":"|+|(b: T)(using semigroup: Semigroup[T]): T","d":"kuram.SemigroupOps","k":"def","x":""}];