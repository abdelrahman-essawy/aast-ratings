import React, { memo } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../../components/ui/dialog"
import FormTemplete from "./FormTemplete"


export const ReviewModal = memo(({ name, id, lecturer, course, reviews, lecturerMutate, reviewsMutate, courseMutate }: { name: string, id: string, mutate?: any, lecturer?: any, course?: any, setOptimisticData?: any, lecturerMutate?: () => void, reviewsMutate?: () => void, reviews?: [], courseMutate?: () => void }) => {
    return (
        <Dialog>
            <DialogTrigger>
                <div className="btn btn-block my-2 mp-auto bg-[#191d24]">review</div>
            </DialogTrigger>

            <DialogContent className="!bg-base-300 px-4">
                <DialogHeader>

                    <DialogTitle className='!mb-4'>Review {name}</DialogTitle>

                    <DialogDescription>

                        <FormTemplete
                            id={id}
                            lecturerMutate={lecturerMutate}
                            reviewsMutate={reviewsMutate}
                            courseMutate={courseMutate}
                            lecturer={lecturer}
                            reviews={reviews}
                            course={course} />

                    </DialogDescription>

                </DialogHeader>
            </DialogContent>
        </Dialog>

    )
})
ReviewModal.displayName = 'ReviewModal'
