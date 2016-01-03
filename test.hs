#! /bin/runghc

import Test.QuickCheck
import Testable
import Data.List

prop_idempotent xs = qsort (qsort xs) == qsort xs
prop_firstEqMin xs = not (null xs) ==> head (qsort xs) == minimum xs
prop_lastEqMax xs = not (null xs) ==> last (qsort xs) == maximum xs

prop_ordered xs = isOrdered $ qsort xs
    where
        isOrdered [] = True
        isOrdered [x] = True
        isOrdered (x:y:xs) = x <= y && isOrdered (y:xs)

prop_permutation xs = permutation xs (qsort xs)
    where permutation xs ys = null (xs \\ ys) && null (ys \\ xs)

prop_append xs ys = not (null xs) && not (null ys)
    ==> min (minimum (xs)) (minimum (ys)) == head (qsort (xs ++ ys))

prop_sort_model xs = sort xs == qsort xs

testQSort = do
    quickCheck (prop_idempotent :: [Integer] -> Bool)
    quickCheck (prop_firstEqMin :: [Integer] -> Property)
    quickCheck (prop_lastEqMax :: [Integer] -> Property)
    quickCheck (prop_ordered :: [Integer] -> Bool)
    quickCheck (prop_sort_model :: [Integer] -> Bool)
    quickCheck (prop_permutation :: [Integer] -> Bool)
    quickCheck (prop_append :: [Integer] -> [Integer] -> Property)

main = do
    testQSort
