# No await in loop

## Statement

Pick the solution that performs the best.

## Rationale

The good solution is better because the results are awaited in parallell making the function return after the slowest response is returned instead of stacking up the response times in sequence.
