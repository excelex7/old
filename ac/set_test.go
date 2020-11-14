package set

import "testing"

func BenchmarkUnion(b *testing.B) {
	set1 := NewSet()
	set2 := NewSet()

	for i := 0; i < 100; i++ {
		set1.Add(i)
	}

	for i:= 75; i < 150; i++ {
		set2.Add(i)
	}

	for n := 0; n < b.N; n++ {
		set1.Union(set2)
	}
}

func BenchmarkIntersect(b *testing.B) {
	set1 := NewSet()
	set2 := NewSet()

	for i := 0; i < 100; i++ {
		set1.Add(i)
	}

	for i:= 75; i < 150; i++ {
		set2.Add(i)
	}

	for n := 0; n < b.N; n++ {
		set1.Intersect(set2)
	}
}

func BenchmarkDifference(b *testing.B) {
	set1 := NewSet()
	set2 := NewSet()

	for i := 0; i < 100; i++ {
		set1.Add(i)
	}

	for i:= 75; i < 150; i++ {
		set2.Add(i)
	}

	for n := 0; n < b.N; n++ {
		set1.Difference(set2)
	}
}

func BenchmarkSet(b *testing.B) {
	set1 := NewSet()
	set2 := NewSet()

	for i := 0; i < 100; i++ {
		set1.Add(i)
	}

	for i:= 75; i < 150; i++ {
		set2.Add(i)
	}

	for n := 0; n < b.N; n++ {
		setA := set1.Difference(set2)
		setB := set2.Difference(set1)
		union := setA.Union(setB)
		set1.Intersect(union)
	}
}